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
// import { SearchBar } from 'react-native-elements';
import { ListItem } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import MyHeader from "../components/MyHeader";

import { LinearGradient } from 'expo-linear-gradient';

export default class OpenIssueScreen extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      requestedCodeHelpList: [],
    };
    this.requestRef = null;
  }
// state = {
//     search: '',
//   };
//  updateSearch = (search) => {
//     this.setState({ search });
//   };
getRequestedCodeHelpList = () => {
    this.requestRef = db
      .collection("requested_code_problems")
      .onSnapshot((snapshot) => {
        var  requestedCodeHelpList = snapshot.docs.map((doc) => doc.data());
        this.setState({
          requestedCodeHelpList: requestedCodeHelpList,
        });
      });
  };
  componentDidMount() {
    this.getRequestedCodeHelpList();
  }

  componentWillUnmount() {
  this.requestRef();
  }

  keyExtractor = (item, index) => index.toString();
   renderItem = ({ item, i }) => {
    return (
      <ListItem
       
  friction={90} //
  tension={100} // These props are passed to the parent component (here TouchableScale)
  activeScale={0.95} //
  linearGradientProps={{
    colors: ['#0000FF', '#75E6DA'],
    start: { x: 1, y: 0 },
    end: { x: 0.2, y: 0 },
  }}
   ViewComponent={LinearGradient} 
        key={i}
        title={item.short_name}
        subtitle={item.description_of_problem}
        titleStyle={{ color: "yellow", fontWeight: "bold" }}
        subtitleStyle={{ color: "black",}}
        // leftElement={
        //   <Image
        //     style={{ height: 50, width: 50 }}
        //     source={{
        //       uri: item.image_link,
        //     }}
        //   />
        // }
        rightElement={
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("RecieverDetails", {
                details: item,
              });
            }}
          >
            <Text style={{ color: "#ffff", fontWeight: 'bold' }}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };
  render() {

    // const { search } = this.state;
    return (
     <View>
     <LinearGradient
        // Background Linear Gradient
        colors={['rgba(rgba(247, 202, 24, 1))', 'transparent']}
        style={styles.background}
      />
     <MyHeader title="Open Issues" navigation={this.props.navigation} />
    <View style={{ flex: 1 }}>
          {this.state.requestedCodeHelpList.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20, textAlign: 'center', alignSelf: 'center', marginTop: 300, fontWeight: 'bold', color: 'green' }}>List Of All Code Help</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.requestedCodeHelpList}
              renderItem={this.renderItem}
            />
          )}
        </View>
     
     </View>
    )
  }
}
const styles = StyleSheet.create({
image: {
  
    flex: 1,
    resizeMode: "stretch",
  },
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
   background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 2000,
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#32867d",
    shadowColor: "#000",
    borderRadius: 15,
   
  },
  view:{
    flex: 1,
    backgroundColor: "#fff"
  }
})
//