import React from 'react'
import { View, TextInput, StyleSheet, SafeAreaView, Text, StatusBar, Button, Alert } from 'react-native'

const ProfileScreen = ({navigation}) => {
    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Screen</Text>
        <Button title="Click here" onPress={() => alert('Button Clicked')}></Button>
        </View>
      )
}

export default ProfileScreen