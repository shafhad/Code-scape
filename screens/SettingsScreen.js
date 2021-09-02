import React, { Component } from 'react';
import {View,Text, KeyboardAvoidingView,TextInput,StyleSheet,ScrollView,TouchableOpacity, ImageBackground, Alert, Image} from 'react-native';
import MyHeader from '../components/MyHeader'
import db from "../config";
import firebase from "firebase";
const settingimage = { uri: "https://raw.githubusercontent.com/IronMan-1000/CS-IMAGES/main/settings%20background2.png" };
import { RFValue } from "react-native-responsive-fontsize";
export default class SettingScreen extends Component{
constructor() {
    super();
    this.state = {
      emailId: "",
      firstName: "",
      lastName: "",
      address: "",
      contact: "",
      docId: "",
    };
  }

  getUserDetails = () => {
    var email = firebase.auth().currentUser.email;
    db.collection("users")
      .where("email_id", "==", email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            emailId: data.email_id,
            firstName: data.first_name,
            lastName: data.last_name,
            address: data.address,
            contact: data.contact,
            docId: doc.id,
          });
        });
      });
  };

  updateUserDetails = () => {
    db.collection("users").doc(this.state.docId).update({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      address: this.state.address,
      contact: this.state.contact,
    });

    alert("Profile Updated Successfully");
  };

  componentDidMount() {
    this.getUserDetails();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{  }}>
          <MyHeader title="Settings" navigation={this.props.navigation} />
        </View>
        <ImageBackground source={settingimage} style={styles.image}>
        <View style={styles.formContainer}>
            <View
              style={{
                flex: 0.66,
                padding: RFValue(10),
              }}
            >
            <Text style={styles.label}>First Name </Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={"First Name"}
                maxLength={12}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text,
                  });
                }}
                value={this.state.firstName}
              />

            <Text style={styles.label}>Last Name </Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={"Last Name"}
                maxLength={12}
                onChangeText={(text) => {
                  this.setState({
                    lastName: text,
                  });
                }}
                value={this.state.lastName}
              />

                <Text style={styles.label}>Contact </Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={"Contact"}
                maxLength={10}
                keyboardType={"numeric"}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
                value={this.state.contact}
              />

                <Text style={styles.label}>Address </Text>
              <TextInput
                style={styles.addressTextInput}
                placeholder={"Address"}
                
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    address: text,
                  });
                }}
                value={this.state.address}
              />
            </View>
              <View style={styles.buttonView}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.updateUserDetails();
                  }}
                >
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <Image source ={require('../assets/warning.png')} style = {{height: 30, width: 30, marginTop: 20}} />
                <Text style = {{textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold',  shadowColor: "red", backgroundColor: 'green', marginTop: 5}}>Note: Your information has been hidden for Security Purpose!!</Text>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#6fc0b8"
  },
  formContainer:{
    flex: 0.88,
   // justifyContent:'center'
  },
  label:{
    fontSize:RFValue(18),
    color:"blue",
    fontWeight:'bold',
    padding:RFValue(10),
    marginLeft:RFValue(20)
  },
  formTextInput: {
    width: "90%",
    height: RFValue(50),
    padding: RFValue(10),
    borderWidth:1,
    borderRadius:2,
    borderColor:"blue",
    marginBottom:RFValue(20),
    marginLeft:RFValue(20)
  },
  addressTextInput: {
    width: "90%",
    height: RFValue(90),
    padding: RFValue(10),
    borderWidth:1,
    borderRadius:2,
    borderColor:"blue",
    marginBottom:RFValue(20),
    marginLeft:RFValue(20)
  },
  button: {
    width: "75%",
    height: RFValue(60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(50),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(40),
  },
  buttonView:{
    flex: 0.22,
    alignItems: "center",
    marginTop:RFValue(70)
},
  buttonText: {
    fontSize: RFValue(23),
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
  },
});