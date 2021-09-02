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
import MyHeader from "../components/MyHeader";
import { LinearGradient } from 'expo-linear-gradient';
export default class CustomerService extends Component {
  render() {
    return(
     <View styles = {{flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3D3D3',}}>
     <LinearGradient
        // Background Linear Gradient
        colors={['rgba(44, 130, 201, 1)', 'transparent']}
        style={styles.background}
      />
      <MyHeader title="Customer Service" navigation={this.props.navigation} />

     <Text style={{color: 'blue', marginTop: 8,fontWeight: "bold", fontSize: 30,  textAlign: 'center',}}>Welcome To Customer Service </Text>

     <Text style={{color: 'black', marginTop: 2,fontWeight: "bold", fontSize: 20, textAlign: 'center',}}>You can get customer service from us from the following ways!! </Text>

     <Image source ={require('../assets/down-arrow.png')} style = {{width: 80, height: 80,  marginLeft: 130, marginTop: 3 }} />

     <Image source ={require('../assets/email.png')} style = {{width: 80, height: 80,  marginLeft: 80, marginTop: 2 }} onPress= { ()=> Linking.openURL('mailto:jarvis-technoblade@outlook.com')}  />
<Text style={{color: 'blue',fontWeight: "bold", fontSize: 15,   marginLeft: 100, }} onPress= { ()=> Linking.openURL('mailto:jarvis-technoblade@outlook.com')}>Email</Text>

<Image source ={require('../assets/discord.png')} style = {{width: 80, height: 80,  marginLeft: 170, marginTop: 2  }} onPress= { ()=> Linking.openURL('www.google.com')}  />
<Text style={{color: 'blue',fontWeight: "bold", fontSize: 15,   marginLeft: 185, }} onPress= { ()=> Linking.openURL('www.google.com')}>Discord</Text> 

<Text style={{color: 'blue', marginTop: 6,fontWeight: "bold", fontSize: 20, fontFamily: 'Cochin', textAlign: 'center',}}>Also get latest update related to our app!! </Text>

<Image source ={require('../assets/world-wide-web.png')} style = {{width: 60, height: 60,  marginLeft: 90,  }} onPress= { ()=> Linking.openURL('web')}  />
<Text style={{color: 'blue',fontWeight: "bold", fontSize: 15, fontFamily: 'Cochin',  marginLeft: 92}} onPress= { ()=> Linking.openURL('web')}>Website</Text> 

<Image source ={require('../assets/youtube.png')} style = {{width: 60, height: 60,  marginLeft: 200,  }} onPress= { ()=> Linking.openURL('web')}  />
<Text style={{color: 'blue',fontWeight: "bold", fontSize: 15, fontFamily: 'Cochin',  marginLeft: 202}} onPress= { ()=> Linking.openURL('web')}>YouTube</Text> 

     </View>
    )
  }
}

const styles = StyleSheet.create({
image: {
    flex: 1,
    resizeMode: "stretch",
  },
   background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
})
//
