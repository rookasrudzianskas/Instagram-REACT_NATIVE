import React from 'react';
import HomeScreen from "../screens/HomeScreen";
import {Image, View} from "react-native";
import {Feather, Ionicons} from "@expo/vector-icons";
import logo from "../assets/images/logo.png";
import {createStackNavigator} from "@react-navigation/stack";
import StoryScreen from "../screens/StoryScreen";

const HomeStack = createStackNavigator();

const HomeRoutes = () => {
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

                    headerTitle: () => (
                        <Image source={logo} style={{width: 135, resizeMode: "contain"}} />
                    ),
                    headerRight: () => (
                        <View styles={{backgroundColor: 'orange'}}>
                            <Ionicons name="ios-paper-plane-outline" size={24} color="black" />
                        </View>
                    ),

                }}
            />
            <HomeStack.Screen name="Story" component={StoryScreen}>

            </HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

export default HomeRoutes;
