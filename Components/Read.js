import React from "react";
import { View, Text, Button, StyleSheet, TextInput, Pressable, TouchableOpacity, navigate } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3287fb',
    padding: 20,
    paddingTop: '55%'
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
  }

});

function Read(props) {
  return (
    <View>
      <Text style={styles.navigation}>
        <Pressable style={styles.pressable1} onPress={() => { props.navigation.navigate("All") }}>
          <Text style={styles.pressabletext1}>All</Text>
        </Pressable>
        <Pressable style={styles.pressable1} onPress={() => { props.navigation.navigate("ReadText") }}>
          <Text style={styles.pressabletext1}>Read</Text>
        </Pressable>
        <Pressable style={styles.pressable1} onPress={() => { props.navigation.navigate("UnRead") }}>
          <Text style={styles.pressabletext1}>UnRead</Text>
        </Pressable>
      </Text>
    </View>

  )
}


export default Read;