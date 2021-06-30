import React from 'react';
import {View, Text, SafeAreaView} from "react-native";
import {useRoute} from "@react-navigation/native";
import storiesData from "../../data/stories.js";

const StoryScreen = () => {

    const route = useRoute();

    const userId = route.params.userId;

    const userStories = storiesData.find(storiesData => storiesData.user.id === userId);
    console.log("userStories");
    console.log(userStories);


    return (
        <SafeAreaView>
            <Text>Rokas</Text>
        </SafeAreaView>
    );
};

export default StoryScreen;
