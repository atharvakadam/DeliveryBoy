import React from 'react'
import { View, StatusBar, TextInput, StyleSheet, SafeAreaView, Text, Image, Button, Alert, Dimensions, TouchableOpacity } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 
import * as Animatable from 'react-native-animatable'

const SplashScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#000000' barStyle='light-content' />
            <View style={styles.header}>
                {/*<Text>Header</Text> */}
                <Animatable.Image source={require('../assets/Logo.png')} 
                    animation="bounceIn"
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.title}>Enjoy the world's best mac and cheese!</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                        <LinearGradient 
                            colors={['#2C3E50','#000000']} 
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Get Started</Text>
                            <MaterialIcons name="navigate-next" color='#fff' size={20} />
                        </LinearGradient>         
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
      )
}
// #009387

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // backgroundColor: '#0e0e0e'
    backgroundColor: '#292e34'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#ffc603',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
    //   color: '#05375a',
      color: '#434343',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
    //   color: 'grey',
      color: '#434343',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});

export default SplashScreen