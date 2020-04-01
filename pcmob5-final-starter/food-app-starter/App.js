import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import { setNavigator } from "./src/navigationRef";

const switchNavigator = createSwitchNavigator({
  loginFlow: createSwitchNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  main: createBottomTabNavigator({
    Food: createStackNavigator(
      {
        Index: IndexScreen,
        Show: ShowScreen,
        Create: CreateScreen,
        Edit: EditScreen
      },
      {
        initialRouteName: "Index",
        defaultNavigationOptions: {
          title: "Food"
        }
      }
    ),
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default App;
