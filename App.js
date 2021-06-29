import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import DiscoveryScreen from "./src/screens/DiscoveryScreen";
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Discovery" component={DiscoveryScreen} />
              <Tab.Screen name="Post" component={HomeScreen} />
              <Tab.Screen name="Notifications" component={HomeScreen} />
              <Tab.Screen name="Profile" component={HomeScreen} />
          </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
