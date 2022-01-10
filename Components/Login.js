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
  


function Login(props) {
    return (
      <View style={styles.container}>
        <Text style={styles.login}>Login</Text>
        <TextInput
          style={styles.inputtype}
          placeholder="Email"
          placeholderTextColor="#fff"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.inputtype}
          placeholder="Password"
          placeholderTextColor="#fff"
        />
        <View style={styles.list}>
          <Text style={styles.item}>Remember Me</Text>
          <Text style={styles.item}>Forget Password ?</Text>
        </View>
        <Pressable style={styles.pressable} onPress={() => { props.navigation.navigate("UserAccount") }}>
          <Text style={styles.pressabletext}>Login</Text>
        </Pressable>
  
        <Text style={styles.footertext}>Create an account</Text>
      </View>
    )
  }

export default Login;
