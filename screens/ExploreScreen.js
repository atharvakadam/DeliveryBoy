import React from 'react'
import { View, TextInput, StyleSheet, SafeAreaView, Text, StatusBar, Button, Alert } from 'react-native'

const ExploreScreen = ({navigation}) => {
    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#292e34'}}>
        <Text>Explore Screen</Text>
        <Button title="Click here" onPress={() => alert('Button Clicked')}></Button>
        </View>
      )
}

export default ExploreScreen