import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import OpenIssueScreen from '../screens/OpenIssueScreen';
import ProblemScreen from '../screens/ProblemScreen'

export const AppTabNavigator = createMaterialBottomTabNavigator({
  OpenIssueScreen : {
    screen: OpenIssueScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/open-issue.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Open Issues",
      tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'darkblue',
      
    },
    barStyle: {
      backgroundColor: '#8A2BE2',
      fontWeight: 'bold'
    }
    }
  },
  ProblemScreen: {
    screen: ProblemScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/code-problem.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Code Problem",

      tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'darkblue',
    },
     barStyle: {
      backgroundColor: '#8A2BE2',
      fontWeight: 'bold'
    }
    }
  }
});