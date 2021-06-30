import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import HomeStackScreen from "./home.routes";
import bottomHomeNavigator from "./bottomHomeNavigator.routes.js";
import StoryScreen from "../screens/StoryScreen";
const RootStack = createStackNavigator();

const Router = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name={"Home"} options={{headerShown: false}} component={bottomHomeNavigator}/>

        <RootStack.Screen
            name="Story"
            component={StoryScreen}
            options={{
            headerShown: false,
        }}>

        </RootStack.Screen>
        </RootStack.Navigator>
    );
};

export default Router;
