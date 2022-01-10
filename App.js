import React from "react";
import { View, Text, Button, StyleSheet, TextInput, Pressable, TouchableOpacity, navigate } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Chat from './Components/Chat';
import Login from './Components/Login';
import ChatUsers from './Components/ChatUsers';
import Read from './Components/Read';
import Unread from './Components/Unread';
import UserProfile from './Components/UserProfile'
import ConversationChat from './containers/ConversationChat'
import UserAccount from './containers/UserAccount'
import Main from './containers/Main'
import SignIn from './containers/SignIn'
import SignUp from './containers/SignUp'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3287fb',
    padding: 20,
    paddingTop: '55%'
  },
  bigtext: {
    fontSize: 60,
    color: 'white',
    fontWeight: '800'
  },
  login: {
    fontSize: 40,
    color: 'white',
    fontWeight: '800',
    marginBottom: 20,
    textAlign: 'center'
  },
  smalltext: {
    color: 'white',
    fontSize: 20,
  },
  smalltext1: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  item: {
    color: 'white',
    margin: 3,
    paddingBottom: 40,
    textAlign: 'right',
    width: '48%'
  },
  inputtype: {
    height: 60,
    borderColor: 'white',
    borderBottomWidth: 3,
    fontSize: 18,
    marginBottom: 20
  },
  footertext: {
    textAlign: 'center',
    paddingTop: 20,
    color: 'white'
  },
  pressable: {
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 20
  },
  pressabletext: {
    color: 'black',
    textAlign: 'center',
    padding: 20,
    fontWeight: '500'
  },
  pressable1: {
    backgroundColor: 'white',
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
    width: '33%'
  },
  pressabletext1: {
    color: 'black',
    textAlign: 'center',
    padding: 20,
    fontWeight: '500',
    width: 130
  },
  navigation: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  profile: {
    width: '20%',
    backgroundColor: '#4a9dfb',
    borderRadius: 20
  },
  bodytext: {
    width: '60%',
    paddingLeft: 20
  },
  time: {
    color: 'black',
    fontSize: 12,
    textAlign: 'right',
  },
  hours: {
    width: '20%',
  },
  Aldira: {
    width: '100%',
    padding: 10,
    flexDirection: 'row'
  },
  name: {
    fontSize: 20,
    color: 'black'
  },
  name1: {
    color: 'black'
  },
  unreadm: {
    textAlign: 'right',
    width: '100%',
    float: 'right'
  },
  message: {
    color: 'white',
    backgroundColor: '#4a9dfb',
    borderRadius: 50,
    textAlign: 'center',
    width: 20
  }

});


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigtext}>Stay Connected With Us</Text>
        <Text style={styles.smalltext}>Let’s talk about more things to</Text>
        <Text style={styles.smalltext1}> the people closest to you</Text>
        <Pressable style={styles.pressable} onPress={() => { this.props.navigation.navigate("SignUp") }}>
          <Text style={styles.pressabletext}>Get Started</Text>
        </Pressable>
        <Text style={styles.footertext}>Create an account</Text>

      </View>
    )

  }
}


const appNavigator = createStackNavigator({
  Home: {
    screen: Main
  },
  SignUp:{
    screen:SignUp
  },
  Login: {
    screen: SignIn
  },
  UserList: {
    screen: ChatUsers
  },
  UnRead: {
    screen: Unread
  },
  Chat: {
    screen: Chat
  },
  Read: {
    screen: Read
  },
  Profile: {
    screen: UserProfile
  },
  ConversationChat:{
    screen:ConversationChat
  },
  UserAccount:{
    screen:UserAccount
  }
})


export default createAppContainer(appNavigator)

