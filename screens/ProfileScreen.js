import React from 'react'
import { View, TextInput, StyleSheet, SafeAreaView, Text, StatusBar, Button, Alert } from 'react-native'

const ProfileScreen = ({navigation}) => {
    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#292e34'}}>
        <Text>Profile Screen</Text>
        <Button title="Click here" onPress={() => alert('Button Clicked')}></Button>
        </View>
      )
}

export default ProfileScreen