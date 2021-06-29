import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
      <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <HomeScreen />
          </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({

});
