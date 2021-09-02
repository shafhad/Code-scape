import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert, ImageBackground, Image, StyleSheet} from 'react-native';
const headerimage = { uri: "https://raw.githubusercontent.com/IronMan-1000/CS-IMAGES/main/header%20bg.jpg" };

const MyHeader = props => {
  return (
    <ImageBackground source={headerimage} style={{ flex: 1,
    resizeMode: "fill",}}>
    <Header
      leftComponent={<Icon name='bars' type='font-awesome' color='white'  onPress={() => props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: props.title, style: { color: 'yellow', fontSize:20,fontWeight:"bold", } }}
      
    />
    </ImageBackground>
  );
};

export default MyHeader;
