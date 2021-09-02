import React, { Component,} from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import { RFValue } from "react-native-responsive-fontsize";
const slides = [
  {
    key: "one",
    title: "Welcome to Code Scapes!",
    text: "Coding Reimaginated!!!",
    image: require("../assets/1.png")
  },
  {
    key: "two",
    title: "Coding Reimaginated!",
    text:
      "Think coding the way you want to. Now with this app, coding becomes too easy than you think.",
    image: require("../assets/2.gif")
  },
  {
    key: "three",
    title: "Ask Help & Seek Help!",
    text:
      "Ask any help related to coding and seek help from any user in the app.",
    image: require("../assets/3.png")
  },
  {
    key: "four",
    title: "Help someone!",
    text: "Help people and become famous in the app, by being a great helper.",
    image: require("../assets/4.png")
  },
  {
    key: "five",
    title: "Interested to be in Coding Fun!!",
    text: "Click on the Get Started button to join.",
    image: require("../assets/5.gif")
  }
];

export default class OnBoarding extends Component {
  state = { showHomePage: false };
  goToLoginScreen=()=> {
      this.props.navigation.navigate('LoginScreen')
    }
  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, alignContent: "center" }}>
        <Image
          source={item.image}
          style={{
            marginTop: RFValue(150),
            resizeMode: "cover",
            height: RFValue(150),
            width: RFValue(200),
            alignSelf: "center"
          }}
        />
        <Text
          style={{
          marginTop: RFValue(80),
            //paddingTop: RFValue(25),
            paddingBottom: RFValue(10),
            fontSize: RFValue(23),
            fontWeight: "bold",
            color: "#21465b",
            alignSelf: "center"
          }}
        >
          {item.title}
        </Text>

        <Text
          style={{
            marginTop: RFValue(20),
            textAlign: "center",
            color: "green",
            fontSize: RFValue(20),
            paddingHorizontal: RFValue(30)
          }}
        >
          {item.text}
        </Text>
        <TouchableOpacity style={{
                                height: 60,
                                borderRadius: 30,
                                backgroundColor: 'red',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width:170,
                                marginLeft: RFValue(150),
                                marginTop: RFValue(20),

                            }}
                             onPress={this.goToLoginScreen}
                            >
                                <Text style={{
                                    color: 'white',
                                    fontSize: RFValue(18),
                                    marginLeft: RFValue(20),
                                }}>Get Started</Text>
                                <AntDesignIcons name="right" 
                                style={{fontSize: RFValue(18), color: 'white', opacity: 0.3, marginLeft: RFValue(20)}}/>
                                <AntDesignIcons
                                name="right"
                                style={{fontSize: RFValue(25), color: 'white', marginLeft: RFValue(-15)}}
                                />
                            </TouchableOpacity>
      </View>
    );
  };

  render() {
    if (this.state.showHomePage) {
      return <OnBoarding />;
    } else
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          activeDotStyle={{
            backgroundColor: "#21465b",
            width: 30
          }}
        />
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
