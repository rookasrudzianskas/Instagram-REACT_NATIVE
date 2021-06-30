import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import Router from "./src/router";
import { withAuthenticator } from 'aws-amplify-react-native'

export default function App() {
  return (
      <NavigationContainer >
          <StatusBar barStyle="dark-content" />
         <Router />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
