import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from 'expo-linear-gradient';
const image = {
  uri:
    'https://raw.githubusercontent.com/IronMan-1000/CS-IMAGES/main/background.jpg',
};
import db from "../config";
import firebase from "firebase";
export default class SplashScreen extends Component {

componentDidMount() {
this.checkIfLoggedIn()
  }

  checkIfLoggedIn = () => {
firebase.auth().onAuthStateChanged((user) => {
if (user) {
setTimeout(() => {
      this.props.navigation.navigate('OpenIssueScreen');
    }, 1000);
} else {
setTimeout(() => {
      this.props.navigation.navigate('OnBoarding');
    }, 1000);
}
})
}
  render() {
    return (
      <View style={styles.container}>
         <LinearGradient
        // Background Linear Gradient
        colors={['rgba(77, 5, 232, 1)', 'transparent']}
        style={styles.background}
      />
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,}}>
            <Image
              source={require('../assets/logo.png')}
              style={{ width: 300, height: 300, marginTop: RFValue(350) }}
            />
            <Text
              style={{
                fontSize:  RFValue(45),
                fontWeight: 'bold',
                color: 'blue',
              
                marginTop:  RFValue(5),
              }}>
              {' '}
              Code Scapes{' '}
            </Text>
            
            <ActivityIndicator
              size="large"
              color="blue"
              style={{ margin:  RFValue(10), marginBottom:  RFValue(214) }}
            />
          </View>
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'stretch',
  },
   container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  background2: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 150,
  },
});
