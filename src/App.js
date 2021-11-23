import React, { useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router";

import "./App.css";
import Header from "./Components/Header/Header";
import Create from "./Pages/Create/Create";
import Home from "./Pages/Home/Home";
import EditRecipe from "./Pages/Recipe/EditRecipe";
import CopyRecipe from "./Pages/Create/CopyRecipe"
import Recipe from "./Pages/Recipe/Recipe";
import Amplify,{API} from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_RECIPES,
  SET_USER,
  SET_AUTH_STATUS,
  SET_ALL_RECIPES,
} from "./Constants/actions";
import { LOGGEDIN, LOGGEDOUT } from "./Constants/states";
import PhoneNumber from "./Pages/Auth/PhoneNumber";
import VerifyCode from "./Pages/Auth/VerifyCode"
import {awsConfig} from './aws-config'
import { getAllRecipes, getRecipies } from "./Endpoints/recipeEndpoints";
import { Auth } from "aws-amplify";
import Schedule from "./Pages/Schedule/Schedule";
const endpoints = [
  {
    name: "Cook",
    endpoint: "https://yh2gd027zi.execute-api.us-west-2.amazonaws.com/prod",
  },
];
Amplify.configure({ endpoints: endpoints, Auth: awsConfig });

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.common.auth);
  const user = useSelector((state) => state.common.user);

  useEffect(()=>{
    if(auth===LOGGEDIN){
    loadData();
    }
  },[auth])
  const checkAuth= async()=>{
    const curr = await Auth.currentAuthenticatedUser();
    // console.log(curr)
    if(curr){
      dispatch({ type: SET_USER, payload: curr });
      dispatch({ type: SET_AUTH_STATUS, payload: LOGGEDIN });
      history.push("/");
    }
  }

useEffect(()=>{
  checkAuth();
},[])
  const loadData = async()=>{
    const data = await getRecipies();
    const allData = await getAllRecipes();
    // console.log("Got data",data)
    dispatch({type:SET_RECIPES,payload:data});
    dispatch({ type: SET_ALL_RECIPES, payload: allData });
  }

  return (
    <div className="App">
      {auth === LOGGEDOUT && (
        <div>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={PhoneNumber} />
          <Route exact path="/verify" component={VerifyCode} />
        </div>
      )}
      {auth === LOGGEDIN && (
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/recipe/:id" component={Recipe} />
          <Route exact path="/recipe/:id/edit" component={EditRecipe} />
          <Route exact path="/recipe/:id/copy" component={CopyRecipe} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/schedule" component={Schedule} />
        </div>
      )}
    </div>
  );
}

export default App;
