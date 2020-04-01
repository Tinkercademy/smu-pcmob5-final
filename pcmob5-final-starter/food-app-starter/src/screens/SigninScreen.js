import React from "react";
import { View, StyleSheet, TextInput, AsyncStorage } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { Signin } from "../api/api";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";
import { navigate } from "../navigationRef";

export default class SigninScreen extends React.Component {
  state = {
    username: "",
    password: ""
  };

  _signin = async () => {
    // code signin here
  };

  handleUsernameUpdate = username => {
    this.setState({ username });
  };

  handlePasswordUpdate = password => {
    this.setState({ password });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.err}</Text>
        <Spacer>
          <Text h3>Sign In</Text>
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
          <Button title="Sign in" onPress={this._signin} />
          <NavLink
            routeName="Signup"
            text="Don't have an account? Sign up instead"
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
  }
});
