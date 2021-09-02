import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Text, Image, StyleSheet } from 'react-native';
import OpenIssueScreen from '../screens/OpenIssueScreen';

export const AppStackNavigator = createStackNavigator({
   OpenIssueScreen : {
    screen : OpenIssueScreen,
    navigationOptions:{
      headerShown : false
    }
  },
},
{
  navigationOptions: {
    headerBackground: (
      <Image
        style={StyleSheet.absoluteFill}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
      />
    ),
    headerTitleStyle: { color: '#fff' },
  }
},
{
    initialRouteName: 'OpenIssueScreen'
}
)
