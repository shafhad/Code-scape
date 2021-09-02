import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ImageBackground
} from "react-native";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import SplashScreen from "./screens/SplashScreen";
import OnBoarding from "./screens/OnBoarding";
import LoginScreen from "./screens/LoginScreen";
import { AppDrawerNavigator } from "./components/AppDrawerNavigator";
import { AppTabNavigator } from "./components/AppTabNavigator";
import SignUpScreen from "./screens/SignUpScreen";

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

export default function App() {
  return <AppContainer />;
}
const switchNavigator = createSwitchNavigator({
  SplashScreen: { screen: SplashScreen },
  OnBoarding: { screen: OnBoarding },
 LoginScreen: { screen: LoginScreen },
  Drawer: { screen: AppDrawerNavigator },
  BottomTab: { screen: AppTabNavigator },
  SignUpScreen: { screen: SignUpScreen }
});
const AppContainer = createAppContainer(switchNavigator);
