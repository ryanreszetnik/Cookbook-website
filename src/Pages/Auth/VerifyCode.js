import { Input } from "@material-ui/core";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Auth } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";
import { SET_AUTH_STATUS,SET_USER } from "../../Constants/actions";
import { LOGGEDIN, LOGGEDOUT } from "../../Constants/states";
import { useHistory } from "react-router";

export default function VerifyCode() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state=>state.common.user)
  const submit = async() => {
    console.log(value);
    //console.log(user)
    
    const challengeResp =await Auth.sendCustomChallengeAnswer(user,value)
    dispatch({ type: SET_USER, payload: challengeResp });
    dispatch({ type: SET_AUTH_STATUS, payload: LOGGEDIN });
    console.log(challengeResp);
    history.push("/");
  };
  return (
    <div>
      
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Input Verification Code"
      />
      <Button onClick={submit}>Submit</Button>
    </div>
  );
}
