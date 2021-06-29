import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
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
              <Tab.Screen name="Settings" component={HomeScreen} />
          </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
