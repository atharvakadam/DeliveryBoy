import React from 'react'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import ExploreScreen from './ExploreScreen'
import ProfileScreen from './ProfileScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import Icon from 'react-native-vector-icons/Ionicons'


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator initialRouteName="Home" activeColor="#fac603" >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                tabBarLabel: 'Home',
                tabBarColor: '#292e34',
                tabBarIcon: ({ color }) => (
                   <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="Details"
                component={DetailsStackScreen}
                options={{
                tabBarLabel: 'Details',
                tabBarColor: '#292e34',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-card-details" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                tabBarLabel: 'Profile',
                tabBarColor:'#292e34',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                tabBarLabel: 'Explore',
                tabBarColor:'#292e34',
                tabBarIcon: ({ color }) => (
                    // <MaterialCommunityIcons name="camera-image" color={color} size={26} />
                    <MaterialIcons name="explore" color={color} size={26} />
                ),
                }}
            />
        </Tab.Navigator>
    )
}

const HomeStackScreen = ({navigation}) => {
    return (
      <HomeStack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle:{
            backgroundColor: '#292e34'
          },
          headerTintColor: '#fac603',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
          <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title: 'Overview',
            headerLeft: () => (
              <Icon.Button name='ios-menu' 
              size={25} 
              backgroundColor="#292e34"
              color="#fac603"
              onPress={() => navigation.openDrawer()}></Icon.Button>
            ),
            headerRight: () => (
              <Icon.Button name="ios-cart"
              size={25}
              backgroundColor="#292e34"
              color="#fac603"
              ></Icon.Button>
            )
          }} />
        </HomeStack.Navigator>
    )
  }
  
  const DetailsStackScreen = ({navigation}) => {
    return (
      <DetailsStack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle:{
            backgroundColor: '#292e34'
          },
          headerTintColor: '#fac603',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
          <DetailsStack.Screen name="Details" component={DetailsScreen} 
          options={{
            headerLeft: () => (
              <Icon.Button name="ios-menu" 
              size={25} 
              backgroundColor="#292e34" 
              color='#fac603'
              onPress={() => navigation.openDrawer()}></Icon.Button>
            ),
            headerRight: () => (
              <Icon.Button name="ios-cart"
              size={25}
              backgroundColor="#292e34"
              color="#fac603"
              ></Icon.Button>
            )
            
          }}
          />
        </DetailsStack.Navigator>
  
    )
  }
  
export {HomeStackScreen, DetailsStackScreen}  
export default MainTabScreen;