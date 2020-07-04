import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button, Alert, TouchableOpacity, Dimensions, Platform, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import {firebase} from '../src/firebase/config'

import {decode, encode} from 'base-64';

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode } 

const SignInScreen = ({navigation, user, setUser}) => {

    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    })

    const textInputChange = (val) => {
        if (val.length !== 0){
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        }
        else{
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }
    } 

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        })
    }
    
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const signIn = () => {
        if (data.email === '' || data.password === ''){
            alert('Please enter both fields to sign in.')
        }
        else{
            console.log("Sign in pressed")
            firebase.auth().signInWithEmailAndPassword(data.email, data.password).then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef.doc(uid).get().then(firestoreDocument => {
                    if(!firestoreDocument.exists){
                        alert("User does not exist anymore.")
                        return;
                    }
                    const user = firestoreDocument.data()
                }).catch(error => {
                    alert(error)
                })
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(error)
                // ...
            });
        } 
    }

    const resetPassword = () => {
        if (data.email === ''){
            alert('Please enter your email!')
        }
        else{
            var auth = firebase.auth()
            var emailAddress = data.email
            auth.sendPasswordResetEmail(emailAddress).then(function(){
                alert(`Password recovery email sent to the registered email address (${emailAddress})`)
            }).catch(function(error){
                console.log('Error occured.')
            })
        }  

    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#000000' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
            >
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="E-mail"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ? 
                    <Animatable.View animation="bounceIn">    
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                    </Animatable.View>
                    : null }
                </View>
                <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style={styles.action}>
                    <Feather 
                        name="lock"
                        color="#05375a"
                        size={22}
                    />
                    <TextInput 
                        placeholder="Password"
                        style={styles.textInput}
                        autoCapitalize="none"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={() => updateSecureTextEntry()}>
                        {data.secureTextEntry ? 
                            <Feather 
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                        :    
                            <Feather 
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.forgotPassword} onPress={resetPassword}>
                    <Text style={{marginTop:7, color:'#292e34'}}>Forgot your password ?</Text>
                </TouchableOpacity>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => signIn()} style={styles.signIn} >
                    <LinearGradient 
                        colors={['#2C3E50','#000000']} 
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {color: '#fff'} ]}>Sign In</Text>
                    </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={{marginTop:7, color:'#292e34'}}>New to MacShack? Create a new account</Text>
                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </View>
      )
}
//Don't have an account? Sign Up

export default SignInScreen

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    //   backgroundColor: '#0e0e0e'
    backgroundColor: '#292e34'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#ffc603',
        // backgroundColor: '#f7c644',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#434343',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#434343',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    forgotPassword: {
        alignItems: 'flex-start',
    }
});