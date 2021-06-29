import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
      <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <HomeScreen />
          </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
