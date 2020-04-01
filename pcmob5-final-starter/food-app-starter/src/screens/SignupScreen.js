import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { Signin, Signup } from "../api/api";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";
import { navigate } from "../navigationRef";

export default class SignupScreen extends React.Component {
  state = {
    username: "",
    password: ""
  };

  _signup = async () => {
    // code signup here
  };

  handleUsernameUpdate = username => {
    // update username text to reflect input
  };

  handlePasswordUpdate = password => {
    // update password text to reflect input
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.err}</Text>
        <Spacer>
          <Text h3>Sign Up</Text>
        </Spacer>
        <Input
          label="Username"
          value={this.state.username}
          onChangeText={this.handleUsernameUpdate}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer />
        <Input
          secureTextEntry
          label="Password"
          value={this.state.password}
          onChangeText={this.handlePasswordUpdate}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer>
          <Button title="Sign up" onPress={this._signup} />
          <NavLink
            routeName="Signin"
            text="Already have an account? Sign in instead"
          />
        </Spacer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
    // margin: 10
  },
  text: {
    textAlign: "center"
  },
  error: {
    textAlign: "center",
    color: "red"
  },
  link: {
    color: "blue"
  }
});
