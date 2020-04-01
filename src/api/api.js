import React from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import axios from "axios";
import { navigate } from "../navigationRef";

class api extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
}

_bootstrapAsync = async () => {
  const userToken = await AsyncStorage.getItem(res.access_token);
};

export const Signup = async (username, password) => {
  const response = await axios.post(
    "https://pcmob4-food-api.herokuapp.com/newuser",
    { username, password }
  );
};

export const Signin = async ({ username, password }) => {
  try {
    const response = await axios.post(
      "https://pcmob4-food-api.herokuapp.com/auth",
      { username, password }
    );
    AsyncStorage.getItem("token");
    navigate("Index");
  } catch (err) {
    console.log(err);
  }
};

export const signout = async () => {
  await AsyncStorage.removeItem("token");
  navigate("Signup");
};
