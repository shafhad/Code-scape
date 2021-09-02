import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { Avatar } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import  firebase from 'firebase';
import db from '../config';
const image = {
  uri:
    'https://raw.githubusercontent.com/IronMan-1000/CS-IMAGES/main/side%20drawer.png',
};
export default class CustomSideBarMenu extends Component {
  state = {
    userId: firebase.auth().currentUser.email,
    image: '#',
    name: '',
    docId: '',
  };

  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      this.uploadImage(uri, this.state.userId);
    }
  };

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child('user_profiles/' + imageName);

    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    });
  };

  fetchImage = (imageName) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child('user_profiles/' + imageName);

    // Get the download URL
    storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ image: url });
      })
      .catch((error) => {
        this.setState({ image: '#' });
      });
  };

  getUserProfile() {
    db.collection('users')
      .where('email_id', '==', this.state.userId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            name: doc.data().first_name + ' ' + doc.data().last_name,
            docId: doc.id,
            image: doc.data().image,
          });
        });
      });
  }

  componentDidMount() {
    this.fetchImage(this.state.userId);
    this.getUserProfile();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={image} style={styles.image}>
          <View
            style={{
              flex: 0.3,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Avatar
              rounded
              source={{
                uri: this.state.image,
              }}
              size={'xlarge'}
              onPress={() => this.selectPicture()}
              showEditButton
            />

            <Text
              style={{
                fontWeight: '300',
                fontSize: 20,
                color: '#fff',
                padding: 10,
              }}>
              {this.state.name}
            </Text>
          </View>
          <View style={styles.drawerItemsContainer}>
            <DrawerItems {...this.props} />
          </View>
          <View style={styles.logOutContainer}>
            <TouchableOpacity
              style={styles.logOutButton}
              onPress={() => {
                this.props.navigation.navigate('OnBoarding');
                firebase.auth().signOut();
              }}>
              <Image
                source={require('../assets/log-out.png')}
                style={{
                  width: 30,
                  height: 30,
                  paddingLeft: 20,
                  marginLeft: 18,
                  marginBottom: 5,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  marginBottom: 5,
                  marginLeft: 20,
                  fontWeight: 'bold',
                }}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerItemsContainer: {
    flex: 0.8,
    //marginTop: 100
  },
  logOutContainer: {},
  logOutButton: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    marginBottom: 100,
  },
  logOutText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 50,
    marginBottom: 30,
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
  },
});
