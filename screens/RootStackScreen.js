import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from './SplashScreen'
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'
import MainTabScreen from './MainTabScreen'
// import { set } from 'react-native-reanimated'/
 
const RootStack = createStackNavigator()

const RootStackScreen = ({navigation, user, setUser}) => (
    <RootStack.Navigator headerMode="none">
        {console.log('Rootstack')}
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen user={user} setUser={setUser} name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen user={user} setUser={setUser} name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
)

// <RootStack.Screen name="MainTabScreen" component={MainTabScreen} />
export default RootStackScreen