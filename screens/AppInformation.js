import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground,
  Linking, 
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-elements';
import MyHeader from "../components/MyHeader";
const image = { uri: "https://raw.githubusercontent.com/IronMan-1000/CS-IMAGES/main/News%20Background%20final.png" };
export default class AppInfromation extends Component {
  render() {
    return(
        <View style = {styles.container}>
       <LinearGradient
        // Background Linear Gradient
        colors={['rgba(rgba(247, 202, 24, 1))', 'transparent']}
        style={styles.background}
      />
        <MyHeader title="App Help" navigation={this.props.navigation} />
        <Text style = {{fontFamily: 'Jokerman', fontWeight: 'bold', fontSize: 20,  textAlign: 'center',  color : 'blue', marginTop: 70}} > You can solve your issues with the App from here!! </Text>
       
        <ScrollView>
     <Card title="Raise Help" style = {{backgroundColor: 'transparent'}}>
          {/*react-native-elements Card*/}
          <Text style={styles.paragraph}>
            You can raise help from navigating to the Code Problem screen and fill up the form. And done your help is raised. Your problem will be answered by other users.
          </Text>

        </Card>

        <Card title="Help Others" style = {{backgroundColor: 'transparent'}}>
          {/*react-native-elements Card*/}
          <Text style={styles.paragraph}>
            You can help others by navigating to the Open Issue screen. There you can see the list of helps asked. So you can help the problem of others.
          </Text>
          
        </Card>

        <Card title="Change Your Profile Information" style = {{backgroundColor: 'transparent'}}>
          {/*react-native-elements Card*/}
          <Text style={styles.paragraph}>
            You can change your profile information from the settings screen. Your information will be hidden for security purpose.
          </Text>
          
        </Card>

        <Card title="Latest News" style = {{backgroundColor: 'transparent'}}>
          {/*react-native-elements Card*/}
          <Text style={styles.paragraph}>
            You can stay updated with the latest technology news from the Latest News screen.
          </Text>
          
        </Card>
  </ScrollView>
  
        </View>
    )
  }
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "yellow"
  },
image: {
    flex: 1,
    resizeMode: "stretch",
  },
   background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 180,
  },
    paragraph: {
    fontSize: 15,
    textAlign: 'center',
    color: '#34495e',
  },
})

