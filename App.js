import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import DiscoveryScreen from "./src/screens/DiscoveryScreen";
import CreatePostScreen from "./src/screens/CreatePostScreen";
import NotificationsScreen from "./src/screens/NotificationsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <Tab.Navigator>
              {/* Navigation*/}
              <Tab.Screen name="Home" component={HomeScreen} />
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
