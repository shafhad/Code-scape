import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ImageBackground,
  TextInput
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import db from "../config";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
const image = {
  uri:
    "https://raw.githubusercontent.com/IronMan-1000/CS-IMAGES/main/login%20bg.png"
};

export default class LoginScreen extends Component {
  goToSignUpScreen = () => {
    this.props.navigation.navigate("SignUpScreen");
  };
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isVisible: false,
      firstName: "",
      lastName: "",
      mobileNumber: "",
      address: "",
      confirmPassword: ""
    };
  }
  userLogin = (username, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        this.props.navigation.navigate("OpenIssueScreen");
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert("i am coming");
      });
  };

  userSignUp = (username, password, confirmPassword) => {
    if (password !== confirmPassword) {
      alert("password doesn't match\nCheck your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(username, password)
        .then(response => {
          db.collection("users").add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            mobile_number: this.state.mobileNumber,
            username: this.state.username,
            address: this.state.address
          });
          alert("User Added Successfully", "", [
            { text: "OK", onPress: () => this.setState({ isVisible: false }) }
          ]);
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;

          var errorMessage = error.message;
          console.log(errorMessage);
          Alert.alert("errorMessage");
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "black",
                marginTop: RFValue(120),
                fontWeight: "bold",
                fontSize: RFValue(50),
                fontFamily: "SFProDisplay-Semibold",
                textAlign: "center"
              }}
            >
              Welcome Back
            </Text>

            <Text
              style={{
                color: "grey",
                marginTop: RFValue(30),
                fontWeight: "bold",
                fontSize: RFValue(17),
                fontFamily: "SFProDisplay-Semibold",
                textAlign: "center"
              }}
            >
              Use your credentials below and login to your account
            </Text>

            <TextInput
              style={{
                width: RFValue(250),
                height: RFValue(45),
                fontSize: RFValue(15),
                marginTop: RFValue(40),
                borderRadius: 5,
                borderWidth: 2.5,
                borderColor: "grey",
                selectionColor: "#428AF8"
              }}
              keyboardType="email-address"
              placeholder={"  Enter your email"}
              onChangeText={text => {
                this.setState({
                  username: text
                });
              }}
            />
            <TextInput
              style={{
                width: RFValue(250),
                height: RFValue(45),
                fontSize: RFValue(15),
                marginTop: RFValue(40),
                borderRadius: 5,
                borderWidth: 2.5,
                borderColor: "grey"
              }}
              secureTextEntry={true}
              placeholder={"  Enter your password."}
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
            />

            <TouchableOpacity
              style={{
                width: "75%",
                height: RFValue(50),
                justifyContent: "center",
                alignItems: "center",
                borderRadius: RFValue(25),
                backgroundColor: "#32CD32",
                elevation: 10,
                marginTop: RFValue(60)
              }}
              onPress={() => {
                this.userLogin(this.state.username, this.state.password);
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: RFValue(16),
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                Log into your account
              </Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                style={{
                  width: RFValue(150),
                  height: RFValue(50),
                  marginTop: RFValue(60),
                  alignItems: "center"
                }}
                onPress={this.goToSignUpScreen}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#32CD32",
                    fontSize: RFValue(15)
                  }}
                >
                  Don't have a account? Sign Up here{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe0b2"
  },
  image: {
    flex: 1,
    resizeMode: "stretch"
  }
});
