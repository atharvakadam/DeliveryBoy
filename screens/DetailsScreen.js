import React from 'react'
import { View, TextInput, StyleSheet, SafeAreaView, Text, StatusBar, Button } from 'react-native'

const DetailsScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        <Button title="Go to details screen ...again" onPress={() => navigation.push('Details')}></Button>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')}></Button>
        <Button title="Go back" onPress={() => navigation.goBack()}></Button>
        <Button title="Go to first screen" onPress={() => navigation.popToTop()}></Button>
        </View>
      );
}

export default DetailsScreen