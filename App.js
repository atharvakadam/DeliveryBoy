import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Text, StatusBar, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStackScreen, DetailsStackScreen } from './screens/MainTabScreen'
// import { Icon } from 'react-native-elements'
import MainTabScreen from './screens/MainTabScreen'
import DrawerContent from './screens/DrawerContent'
import {decode, encode} from 'base-64';

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode } 

const Drawer = createDrawerNavigator();

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import RootStackScreen from './screens/RootStackScreen';
import {firebase} from './src/firebase/config'
import { sub } from 'react-native-reanimated';

const Tab = createMaterialBottomTabNavigator();



const App = () => {

  const [user, setUser] = useState(null)

  var LoggedInUser = firebase.auth().currentUser;
  firebase.auth().onAuthStateChanged(function(user){
    setUser(user);
  })

  // firebase.auth().onIdTokenChanged(function(user){
  //   // console.log(user)
  //   setUser(user)
  //   console.log('SHIT SOMEONE SIGNED UP')
  // })

  return(
    <NavigationContainer>
    {user ? 
      (<Drawer.Navigator drawerContent={props => <DrawerContent {...props} user={user} />}>
          {console.log('Drawer')}
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="Bookmarks" component={BookmarkScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen name="Support" component={SupportScreen} />
      </Drawer.Navigator>)
      :
      <RootStackScreen user={user} setUser={setUser} />
    }
    </NavigationContainer>
  )
  
}
// <Drawer.Screen name="Details" component={DetailsStackScreen} />

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkslateblue',
  },
  loginText: {
    fontSize: 30, 
    paddingBottom: 70, 
    paddingTop: 50, 
    textAlign: 'center',
    backgroundColor: 'darkslateblue'
  }
})


export default App
