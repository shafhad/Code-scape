import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground,
  TextInput
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import db from "../config";
import firebase from "firebase";

const image = {
  uri:
    "https://raw.githubusercontent.com/IronMan-1000/CS-IMAGES/main/login%20bg.png"
};
export default class SignUpScreen extends Component {
  goToLoginScreen = () => {
    this.props.navigation.navigate("LoginScreen");
  };
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      contact: "",
      confirmPassword: "",
      isModalVisible: "false"
    };
  }

  userSignUp = (emailId, password, confirmPassword) => {
    if (password !== confirmPassword) {
      alert("password doesn't match\nCheck your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection("users").add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            contact: this.state.contact,
            email_id: this.state.emailId,
            address: this.state.address
          });
          alert("User Added Successfully", "", [
            {
              text: "OK",
              onPress: () => this.setState({ isModalVisible: false })
            }
          ]);
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
        });
    }
  };

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate("LoginScreen");
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "white",
                marginTop: 20,
                fontWeight: "bold",
                fontSize: 30,
               
              }}
            >
              Create Account
            </Text>

            <Text
              style={{
                color: "black",
                marginTop: RFValue(10),
                fontWeight: "bold",
                fontSize: RFValue(17),
               
                textAlign: "center"
              }}
            >
              Let us know you by filling up the form
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TextInput
              style={{
                width: RFValue(250),
                height: RFValue(45),
                fontSize: RFValue(15),
                marginTop: RFValue(20),
                borderRadius: 5,
                borderWidth: 2.5,
                borderColor: "grey"
              }}
              placeholder={"    First Name"}
              maxLength={12}
              onChangeText={text => {
                this.setState({
                  firstName: text
                });
              }}
            />

            <TextInput
              style={{
                width: RFValue(250),
                height: RFValue(45),
                fontSize: RFValue(15),
                marginTop: RFValue(12),
                borderRadius: 5,
                borderWidth: 2.5,
                borderColor: "grey"
              }}
              placeholder={"    Last Name"}
              maxLength={12}
              onChangeText={text => {
                this.setState({
                  lastName: text
                });
              }}
            />

            <TextInput
              style={{
                width: RFValue(250),
                height: RFValue(45),
                fontSize: RFValue(15),
                marginTop: RFValue(12),
                borderRadius: 5,
                borderWidth: 2.5,
                borderColor: "grey"
              }}
              placeholder={"    Contact"}
              maxLength={10}
              keyboardType={"numeric"}
              onChangeText={text => {
                this.setState({
                  contact: text
                });
              }}
            />

            <TextInput
              style={{
                width: RFValue(250),
                height: RFValue(70),
                fontSize: RFValue(15),
                marginTop: RFValue(12),
                borderRadius: 5,
                borderWidth: 2.5,
                borderColor: "grey"
              }}
              placeholder={"    Address"}
              multiline={true}
              onChangeText={text => {
                this.setState({
                  address: text
                });
              }}
            />

            <TextInput
              style={{
                width: RFValue(250),
                height: RFValue(45),
                fontSize: RFValue(15),
                marginTop: RFValue(12),
                borderRadius: 5,
                borderWidth: 2.5,
                borderColor: "grey"
              }}
              placeholder={"    Email"}
              keyboardType={"email-address"}
              onChangeText={text => {
                this.setState({
                  emailId: text
                });
              }}
            />

            <TextInput
              style={{
                width: RFValue(250),
                height: RFValue(45),
                fontSize: RFValue(15),
                marginTop: RFValue(12),
                borderRadius: 5,
                borderWidth: 2.5,
                borderColor: "grey"
              }}
              placeholder={"    Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
            />

            <TextInput
              style={{
                width: RFValue(250),
                height: RFValue(45),
                fontSize: RFValue(15),
                marginTop: RFValue(12),
                borderRadius: 5,
                borderWidth: 2.5,
                borderColor: "grey"
              }}
              placeholder={"   Confirm Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  confirmPassword: text
                });
              }}
            />
          </View>

          <View style={{ flex: 0.2, alignItems: "center" }}>
            <TouchableOpacity
              style={{
                width: "60%",
                height: RFValue(45),
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
                backgroundColor: "#32CD32",
                marginTop: RFValue(15)
              }}
              onPress={() =>
                this.userSignUp(
                  this.state.emailId,
                  this.state.password,
                  this.state.confirmPassword
                )
              }
            >
              <Text
                style={{
                  color: "white",
                  fontSize: RFValue(16),
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: RFValue(150),
                height: RFValue(50),
                marginTop: RFValue(50),
                alignItems: "center"
              }}
              onPress={this.goToLoginScreen}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#32CD32",
                  fontSize: RFValue(15)
                }}
              >
                Already have an account? Login Here{" "}
              </Text>
            </TouchableOpacity>
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
