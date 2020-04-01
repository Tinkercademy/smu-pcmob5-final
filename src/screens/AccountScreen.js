import React, { useContext } from "react";
import { View, StyleSheet, Text, AsyncStorage } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { navigate } from "../navigationRef";
import { signout } from "../api/api";

export default class AccountScreen extends React.Component {
  state = {
    username: "",
    password: ""
  };

  _signout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      //dispatch({ type: "signout" });
      this.props.navigation.navigate("Signup");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    // const { signout } = useContext(api);
    return (
      <SafeAreaView forceInset={{ top: "always" }}>
        <Text style={{ fontSize: 40, alignSelf: "center" }}>
          Account Screen
        </Text>
        <Spacer>
          <Button title="Sign Out" onPress={this._signout} />
        </Spacer>
      </SafeAreaView>
    );
  }
}
