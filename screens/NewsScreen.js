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
import { Card } from 'react-native-paper';
import MyHeader from "../components/MyHeader";
import { LinearGradient } from 'expo-linear-gradient';
const image = { uri: "https://raw.githubusercontent.com/IronMan-1000/CS-IMAGES/main/News%20Background%20final.png" };
export default class NewsScreen extends Component {
  render() {
    return(
        <View style = {styles.container}>
       <LinearGradient
        // Background Linear Gradient
        colors={['rgba(rgba(247, 202, 24, 1))', 'transparent']}
        style={styles.background}
      />
        <MyHeader title="Latest News" navigation={this.props.navigation} />
        <Text style = {{fontFamily: 'Jokerman', fontWeight: 'bold', fontSize: 20,  textAlign: 'center',  color : 'blue', marginTop: 70}} > STAY UPDATED WITH THE LATEST  TECHNOLOGICAL NEWS!! </Text>
       
        <ScrollView>
      <Card style = {{backgroundColor: 'lighblue'}}>
    <Card.Cover source={{ uri: 'https://bsmedia.business-standard.com/media-handler.php?mediaPath=https://bsmedia.business-standard.com/_media/bs/img/article/2021-03/12/full/1615553521-5785.jpg&width=220' }} />
    <Card.Actions>
      <Text style = {{fontFamily: 'Jokerman', fontWeight: 'bold', fontSize: 15,  textAlign: 'center',  color : 'blue',}}  onPress={ ()=> Linking.openURL('https://www.business-standard.com/article/companies/facebook-launches-clubhouse-like-live-audio-rooms-and-podcasts-121062100976_1.html') }>Facebook launches Clubhouse-like live audio rooms and podcasts</Text>
  </Card.Actions>
  </Card>

   <Card style = {{backgroundColor: 'lighblue'}}>
    <Card.Cover source={{ uri: 'https://bsmedia.business-standard.com/media-handler.php?mediaPath=https://bsmedia.business-standard.com/_media/bs/img/article/2021-05/06/full/1620282289-6379.jpg&width=220' }} />
    <Card.Actions>
      <Text style = {{fontFamily: 'Jokerman', fontWeight: 'bold', fontSize: 15,  textAlign: 'center',  color : 'blue',}} onPress={ ()=> Linking.openURL('https://www.business-standard.com/article/technology/samsung-set-to-unleash-the-power-of-5g-bets-big-on-6g-tech-121062100808_1.html') }>Samsung set to unleash the power of 5G, bets big on 6G tech</Text>
  </Card.Actions>
  </Card>

   <Card style = {{backgroundColor: 'lighblue'}}>
    <Card.Cover source={{ uri: 'https://bsmedia.business-standard.com/media-handler.php?mediaPath=https://bsmedia.business-standard.com/_media/bs/img/article/2021-03/19/full/1616159961-3358.jpg&width=220' }} />
    <Card.Actions>
      <Text style = {{fontFamily: 'Jokerman', fontWeight: 'bold', fontSize: 15,  textAlign: 'center',  color : 'blue',}} onPress={ ()=> Linking.openURL('https://www.business-standard.com/article/technology/delhi-hc-reserves-order-on-facebook-whatsapp-pleas-challenging-cci-order-121062100524_1.html') }>Delhi HC reserves order on Facebook, WhatsApp pleas challenging CCI order</Text>
  </Card.Actions>
  </Card>
  </ScrollView>
  
        </View>
    )
  }
}
const styles = StyleSheet.create({
container: {
     flex: 1,
    justifyContent: 'center',
    backgroundColor: "lightblue"
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
})

