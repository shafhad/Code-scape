import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground,
  FlatList,
  
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SearchBar, ListItem, Input } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import MyHeader from "../components/MyHeader";
import { LinearGradient } from 'expo-linear-gradient';
export default class ProblemScreen extends Component {
 constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      shortName: "",
      descriptionofproblem: "",
      IsProblemActive: "",
      problemhelprequested: "",
      codeproblemStatus: "",
      requestId: "",
      showFlatlist: false,
    };
  }

  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }

  addRequest = async (shortName, descriptionofproblem) => {
    var userId = this.state.userId;
    var randomRequestId = this.createUniqueId();
    


    db.collection("requested_code_problems").add({
      user_id: userId,
      short_name: shortName,
      description_of_problem: descriptionofproblem,
      request_id: randomRequestId,
      code_problem_Status: "requested",
      date: firebase.firestore.FieldValue.serverTimestamp(),
    });

    await this.getcoderequest();
    db.collection("users")
      .where("email_id", "==", userId)
      .get()
      .then()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          db.collection("users").doc(doc.id).update({
            IsProblemActive: true,
          });
        });
      });

    this.setState({
     shortName: "",
      descriptionofproblem: "",
      requestId: randomRequestId,
    });

    alert("Code Help Raised");
  };

  answeredProblem = (shortName) => {
    var userId = this.state.userId;
    var requestId = this.state.requestId;
    db.collection("received_code_help").add({
      user_id: userId,
      book_name: shortName,
      request_id: requestId,
      code_problem_Status: "helped",
    });
  };

  getIsProblemActive() {
    db.collection("users")
      .where("email_id", "==", this.state.userId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            IsProblemActive: doc.data().IsProblemActive,
            userDocId: doc.id,
          });
        });
      });
  }

  getcoderequest = () => {
    // getting the requested book
    var codeRequest = db
      .collection("requested_code_problems")
      .where("user_id", "==", this.state.userId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          if (doc.data().code_problem_Status !== "received") {
            this.setState({
              requestId: doc.data().request_id,
                problemhelprequested: doc.data().short_name,
               codeproblemStatus: doc.data().code_problem_Status,
            });
          }
        });
      });
  };

  sendNotification = () => {
    //to get the first name and last name
    db.collection("users")
      .where("email_id", "==", this.state.userId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var name = doc.data().first_name;
          var lastName = doc.data().last_name;

          // to get the donor id and book nam
          db.collection("all_notifications")
            .where("request_id", "==", this.state.requestId)
            .get()
            .then((snapshot) => {
              snapshot.forEach((doc) => {
                var helperId = doc.data().donor_id;
                var shortName = doc.data().short_name;

                //targert user id is the donor id to send notification to the user
                db.collection("all_notifications").add({
                  targeted_user_id: helperId,
                  message:
                    name + " " + lastName + " helped you in this code problem: " + shortName,
                  notification_status: "unread",
                  short_name: shortName,
                });
              });
            });
        });
      });
  };

  componentDidMount() {
    this.getcoderequest();
    this.getIsProblemActive();
  }

  updateCodeRequestStatus = () => {
    //updating the book status after receiving the book
    db.collection("requested_code_problems").doc(this.state.docId).update({
      code_problem_Status: "received",
    });

    //getting the  doc id to update the users doc
    db.collection("users")
      .where("email_id", "==", this.state.userId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          //updating the doc
          db.collection("users").doc(doc.id).update({
            IsProblemActive: false,
          });
        });
      });
  };

  render() {
    return (
     <View style = {{backgroundColor: 'lightblue'}}>
     <LinearGradient
        // Background Linear Gradient
        colors={['rgba(44, 130, 201, 1)', 'transparent']}
        style={styles.background}
      />
     <MyHeader title="Code Problem" navigation={this.props.navigation} />
      <View style={{ flex: 0.9 }}>
          <Input
            style={styles.formTextInput}
            label={"Short Name"}
            labelStyle= {{color: 'yellow'}}
            placeholder={"Please give a small name of your issue."}
           placeholderTextColor = "blue"
           // containerStyle={{ marginTop: RFValue(70) }}
            onChangeText={(text) => {
                  this.setState({
                    shortName: text,
                  });
                }}
            value={this.state.shortName}
          />
            <View style={{ alignItems: "center" }}>
              <Input
                style={styles.formTextInput}
                //containerStyle={{ marginTop: RFValue(30) }}
                multiline
                numberOfLines={8}
                label={"Explanation"}
                 labelStyle= {{color: 'yellow'}}
                 placeholderTextColor = "blue"
                placeholder={"Please explain your problem."}
                onChangeText={(text) => {
                  this.setState({
                    descriptionofproblem: text,
                  });
                }}
                value={this.state.descriptionofproblem}
              />
              <TouchableOpacity
                style={[styles.button, ]}
                onPress={() => {
                  this.addRequest(
                    this.state.shortName,
                    this.state.descriptionofproblem
                  );
                }}
              >
                <Text
                  style={styles.requestbuttontxt}
                >
                  Request Help
                </Text>
              </TouchableOpacity>
            </View>
       
        </View>
     </View>
    )
  }
}
const styles = StyleSheet.create({
// image: {
//     flex: 1,
//     resizeMode: "fill",
//   },
   background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 150,
  },
  //  keyBoardStyle: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  formTextInput: {
    width: "75%",
    height: RFValue(35),
    borderWidth: 1,
    padding: 10,
    color: 'black',
    
  },
  // ImageView:{
  //   flex: 0.3,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop:20
  // },
  // imageStyle:{
  //   height: RFValue(150),
  //   width: RFValue(150),
  //   alignSelf: "center",
  //   borderWidth: 5,
  //   borderRadius: RFValue(10),
  // },
  // bookstatus:{
  //   flex: 0.4,
  //   alignItems: "center",

  // },
  // requestedbookName:{
  //   fontSize: RFValue(30),
  //   fontWeight: "500",
  //   padding: RFValue(10),
  //   fontWeight: "bold",
  //   alignItems:'center',
  //   marginLeft:RFValue(60)
  // },
  // status:{
  //   fontSize: RFValue(20),
  //   marginTop: RFValue(30),
  // },
  // bookStatus:{
  //   fontSize: RFValue(30),
  //   fontWeight: "bold",
  //   marginTop: RFValue(10),
  // },
  // buttonView:{
  //   flex: 0.2,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // buttontxt:{
  //   fontSize: RFValue(18),
  //   fontWeight: "bold",
  //   color: "#fff",
  // },
  // touchableopacity:{
  //   alignItems: "center",
  //   backgroundColor: "#DDDDDD",
  //   padding: 10,
  //   width: "90%",
  // },
  requestbuttontxt:{
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    width: "75%",
    height: RFValue(60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(50),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    marginBottom: 80,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
})