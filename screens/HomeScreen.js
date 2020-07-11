import React from 'react'
import { View, TextInput, StyleSheet, SafeAreaView, Text, StatusBar, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#292e34'}}>
        <StatusBar backgroundColor='#292e34' barStyle='light-content' />
        <Text>Home Screen</Text>
        <Button title="Go to details screen" onPress={() => navigation.navigate('Details')}></Button>
        </View>
      )
}

export default HomeScreen
