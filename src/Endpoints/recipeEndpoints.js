import API from "@aws-amplify/api";
import { FlashOffOutlined } from "@material-ui/icons";
import { Auth } from "aws-amplify";
export const getRecipies = async () => {
  const Authorization = (await Auth.currentAuthenticatedUser())
    .signInUserSession.idToken.jwtToken;

  const apiRequest = {
    body: { },
    headers: {
      Authorization,
      "Content-Type": "application/json",
    },
  };
  console.log(JSON.stringify(apiRequest))
  const data = await API.get("Cook", "/?searchAll=false", apiRequest);
  console.log(data);
  return data;
};
export const getAllRecipes = async () => {
  const Authorization = (await Auth.currentAuthenticatedUser())
    .signInUserSession.idToken.jwtToken;

  const apiRequest = {
    body: {},
    headers: {
      Authorization,
      "Content-Type": "application/json",
    },
  };
    console.log(JSON.stringify(apiRequest))
  const data = await API.get("Cook", "/?searchAll=true", apiRequest);
    console.log(data);
  return data;
};
export const updateRecipie = async (recipe) => {
  const Authorization = (await Auth.currentAuthenticatedUser())
    .signInUserSession.idToken.jwtToken;

  const apiRequest = {
    body: recipe,
    headers: {
      Authorization,
      "Content-Type": "application/json",
    },
  };
//   console.log(JSON.stringify(apiRequest));
  const data = await API.post("Cook", "/", apiRequest);
//   console.log(data);
  return data;
};
export const deleteRecipie = async (recipe) => {
  const Authorization = (await Auth.currentAuthenticatedUser())
    .signInUserSession.idToken.jwtToken;

  const apiRequest = {
    body: recipe,
    headers: {
      Authorization,
      "Content-Type": "application/json",
    },
  };
  const data = await API.del("Cook", "/", apiRequest);
//   console.log(data);
  return data;
};