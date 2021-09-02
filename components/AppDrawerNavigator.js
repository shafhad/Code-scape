import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import OpenIssueScreen from '../screens/OpenIssueScreen';
import SplashScreen from '../screens/SplashScreen';
import {Icon} from 'react-native-elements';
import {Image} from 'react-native';
import NewsScreen from '../screens/NewsScreen';
import SettingScreen from '../screens/SettingsScreen';
import AppInformation from '../screens/AppInformation';
import CustomerService from '../screens/CustomerService';
export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon : <Image source ={require('../assets/home.png')} style = {{width: 30, height: 30,}} 
      
      />
      
    },
    
    },
    Splash : {
      screen:SplashScreen,
      navigationOptions:{
         drawerLabel: () => null
      }
    },
    NewsScreen : {
    screen : NewsScreen,
    navigationOptions:{
      drawerLabel: 'Latest News' ,
      drawerIcon : <Image source ={require('../assets/news.png')} style = {{width: 30, height: 30,}} /> 
    },
    
    },
    SettingScreen : {
    screen : SettingScreen,
    navigationOptions:{
      drawerLabel: 'Account Settings' ,
      drawerIcon : <Image source ={require('../assets/settings.png')} style = {{width: 30, height: 30,}} /> 
    }
    },
    AppInformation : {
    screen : AppInformation,
    navigationOptions:{
      drawerLabel: 'App Support' ,
      drawerIcon : <Image source ={require('../assets/information.png')} style = {{width: 30, height: 30,}} /> 
    }
    },
    CustomerService : {
    screen : CustomerService,
    navigationOptions:{
      drawerLabel: 'Customer Service' ,
      drawerIcon : <Image source ={require('../assets/customer-service-agent.png')} style = {{width: 30, height: 30,}} /> 
    }
    },
    
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Splash'
  },
  
  )

  