import React from 'react';
import {View} from "react-native";
import {Feather, Ionicons} from "@expo/vector-icons";
import AntDesign from "react-native-vector-icons/AntDesign";
import DiscoveryScreen from "../screens/DiscoveryScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./home.routes";

const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => {
    return (
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
    );
};

export default BottomHomeNavigator;
