import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import DiscoveryScreen from "./src/screens/DiscoveryScreen";
import CreatePostScreen from "./src/screens/CreatePostScreen";
import NotificationsScreen from "./src/screens/NotificationsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import AntDesign from "react-native-vector-icons/AntDesign";
const Tab = createBottomTabNavigator();
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Instagram',
                    headerLeftContainerStyle: {
                        // backgroundColor: 'white',
                        marginLeft: 15,
                    },
                    headerRightContainerStyle: {
                        // backgroundColor: 'white',
                        marginRight: 15,
                    },

                    headerLeft: () => (
                        <View styles={{backgroundColor: 'orange'}}>
                            <Feather name="camera" size={24} color="black" />
                        </View>
                    ),

                    headerRight: () => (
                        <View styles={{backgroundColor: 'orange'}}>
                            <Ionicons name="ios-paper-plane-outline" size={24} color="black" />
                        </View>
                    ),

                }}
            />
        </HomeStack.Navigator>
    );
}

export default function App() {
  return (


      <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <Tab.Navigator
              screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                      return <Ionicons name="home-outline" size={size} color={color}/>;
                  }

                  if (route.name === 'Discovery') {
                      return <Ionicons name="ios-search" size={size} color={color}/>;
                  }

                  if (route.name === 'Post') {
                      return <Feather name="plus-square" size={size} color={color}/>
                  }

                  if (route.name === 'Notifications') {
                      return <AntDesign name="hearto" size={size} color={color}/>
                  }

                  if (route.name === 'Profile') {
                      return <Ionicons name="person-outline" size={size} color={color}/>
                  }

              },
          })}
                         tabBarOptions={{
                             activeTintColor: '#000',
                             inactiveTintColor: 'gray',
                             showLabel: false,
                         }}
                  >
              {/* Navigation*/}
              <Tab.Screen name="Home" component={HomeStackScreen} />
              <Tab.Screen name="Discovery" component={DiscoveryScreen} />
              <Tab.Screen name="Post" component={CreatePostScreen} />
              <Tab.Screen name="Notifications" component={NotificationsScreen} />
              <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
