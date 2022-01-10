import React from "react";
import { View, Text, Button, StyleSheet, TextInput, Pressable, TouchableOpacity, navigate } from 'react-native';

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



function ChatUsers(props) {
  return (
    <View>
      <Text style={styles.navigation}>
        <Pressable style={styles.pressable1} onPress={() => { props.navigation.navigate("All") }}>
          <Text style={styles.pressabletext1}>All</Text>
        </Pressable>
        <Pressable style={styles.pressable1} onPress={() => { props.navigation.navigate("Read") }}>
          <Text style={styles.pressabletext1}>Read</Text>
        </Pressable>
        <Pressable style={styles.pressable1} onPress={() => { props.navigation.navigate("UnRead") }}>
          <Text style={styles.pressabletext1}>UnRead</Text>
        </Pressable>
      </Text>
      <View style={styles.Aldira}>
        <View style={styles.profile}>
        </View>
        <View style={styles.bodytext} >
          <Pressable onPress={() => { props.navigation.navigate("ConversationChat") }}>
            <Text style={styles.name}> Aldira Gans</Text>
            <Text style={styles.name1}></Text>
          </Pressable>
        </View >
        <View style={styles.hours}>
          <Text style={styles.time}>10:20 PM</Text>
          <View style={styles.unreadm}>
            <Text style={styles.message}></Text>
          </View>
        </View>
      </View>

      <View style={styles.Aldira}>
        <View style={styles.profile}>
        </View>
        <View style={styles.bodytext} >
          <Pressable onPress={() => { props.navigation.navigate("ConversationChat") }}>
            <Text style={styles.name}> John</Text>
            <Text style={styles.name1}></Text>
          </Pressable>
        </View >
        <View style={styles.hours}>
          <Text style={styles.time}>10:20 PM</Text>
          <View style={styles.unreadm}>
            <Text style={styles.message}></Text>
          </View>
        </View>
      </View>

    </View>
  )
}

export default ChatUsers;
