import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const styles = StyleSheet.create({
    views: {
      backgroundColor: '#95c2ff',
      padding: 20,
      paddingTop: '45%',
      borderBottomRightRadius:80,
      marginBottom:20,
      position: 'relative'
    },
    account: {
        fontSize:20,
        fontWeight: '600',
        color:"#3287fb",
        marginBottom:15
    },
    Achmad: {
        fontSize:40,
        fontWeight: '600',
        color:"white"
    },
    actions: {
        fontSize:20,
        fontWeight: '600',
        color:"white"
    },
    number: {
        fontSize:23,
        fontWeight: '600',
        color:"black"
    },
    number1: {
        fontWeight: '600',
        color:"#5a5a5a" 
    },
    fight: {
        padding:30
    },
    lines: {
        paddingBottom: 30,
    },
    changeprofile: {
        backgroundColor: 'white',
        color:'#95c2ff',
        position: "absolute",
        right: 30,
        bottom: '-25%',
        padding: 15,
        borderRadius: 20
    }
  
  });

function UserProfile(props) {
    return (
        <View>
           <View>
               <View style={styles.views}>
                   <Text style={styles.Achmad}>Achmad Fiqrih</Text>
                   <Text style={styles.actions}>Online</Text>
                   <View style={styles.changeprofile}>
                   <FontAwesome5 style={{color:'#95c2ff'}} name={'camera'} size={30} />
                   </View>
               </View>
               <View style={styles.fight}>
                   <Text style={styles.account}>Account</Text>
                   <View style={styles.lines}>
                        <View>
                            <Text style={styles.number}>+72 81 438899720</Text>
                            <Text style={styles.number1}>Phone number</Text>
                        </View>
                   </View>
                   <View style={styles.lines}>
                        <View>
                            <Text style={styles.number}>@fiqrih90</Text>
                            <Text style={styles.number1}> Username </Text>
                        </View>
                   </View>
                   <View style={styles.lines}>
                        <View>
                            <Text style={styles.number}>Bio</Text>
                            <Text style={styles.number1}>Add a few words about yourself</Text>
                        </View>
                   </View>
               </View>
           </View>
        </View>
    )  
}
export default UserProfile;
