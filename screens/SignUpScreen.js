import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button, Alert, TouchableOpacity, Dimensions, Platform, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
// import firebase from 'react-native-firebase'
import {firebase} from '../src/firebase/config'
// import auth from 'react-native-firebase/auth'
import {decode, encode} from 'base-64';

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode } 


const SignUpScreen = ({navigation, user, setUser}) => {

    const [data, setData] = useState({
        email: '',
        name: '',
        password: '',
        confirm_password: '',
        phone_number: '',
        check_textInputChange: false,
        check_nameInputChange: false,
        check_phoneNumberInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
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

    const NameInputChange = (val) => {
        if (val.length !== 0){
            setData({
                ...data,
                phone_number: val,
                check_nameInputChange: true
            })
        }
        else{
            setData({
                ...data,
                name: val,
                check_nameInputChange: false
            })
        }
    }

    const PhoneNumberInputChange = (val) => {
        if (val.length !== 0){
            setData({
                ...data,
                name: val,
                check_phoneNumberInputChange: true
            })
        }
        else{
            setData({
                ...data,
                name: val,
                check_phoneNumberInputChange: false
            })
        }
    }


    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        })
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val,
        })
    }
    
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        })
    }

    const onRegisterPress = () => {

        if ( data.name === '' || data.email==='' || data.confirm_password==='' || data.password === ''){
            alert('Please fill all the fields')
        }
        if( data.password !== data.confirm_password ){
            alert("Passwords don't match")
        }
        else{
            console.log(data.email)
            console.log(data.password)
            const phone = data.phone_number
            const fullName = data.name
            // const uid = null
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then((response) => {
                // console.log(response.user)
                const email = response.user.email
                const uid = response.user.uid 
                const data = {
                    id: uid,
                    email:email,
                    fullname:fullName,
                    phone: phone
                };
                console.log(typeof(uid))
                                
                firebase.firestore().collection('Users').doc(uid).set({email: email, fullname: fullName, phone: phone}).catch(function(error){
                    alert(error)
                })
                
            }).catch(function(error){
                alert(error)
                // alert(`Account for ${data.email} exists. Please Log in with your account`)
            })

        }
        
    }


    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#000000' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
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
                <Text style={[styles.text_footer, {marginTop: 35}]}>Full Name</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Full Name"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => NameInputChange(val)}
                    />
                    {data.check_nameInputChange ? 
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
                <Text style={[styles.text_footer, {marginTop: 35}]}>Confirm Password</Text>
                <View style={styles.action}>
                    <Feather 
                        name="lock"
                        color="#05375a"
                        size={22}
                    />
                    <TextInput 
                        placeholder="Confirm Password"
                        style={styles.textInput}
                        autoCapitalize="none"
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity onPress={() => updateConfirmSecureTextEntry()}>
                        {data.confirm_secureTextEntry ? 
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
                <Text style={[styles.text_footer, {marginTop: 35}]}>Phone</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="phone"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Recovery phone number"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => PhoneNumberInputChange(val)}
                        textContentType='telephoneNumber'
                    />
                    {data.check_phoneNumberInputChange ? 
                    <Animatable.View animation="bounceIn">    
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                    </Animatable.View>
                    : null }
                </View>

                <View style={styles.button}>
                    <TouchableOpacity 
                        onPress={() => onRegisterPress()}
                        style={[styles.signIn, {borderColor: '#000000', borderWidth: 1}]}
                    >
                    <LinearGradient 
                        colors={['#2C3E50','#000000']} 
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {color: '#fff'} ]}>Sign Up</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.goBack()}>
                        <Text style={{marginTop:7, color:'#292e34'}}>Already have an account? Sign in</Text>
                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </View>
      )
}

export default SignUpScreen

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
        // backgroundColor: '#f7c644',
        backgroundColor: '#ffc603',
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
    }
});