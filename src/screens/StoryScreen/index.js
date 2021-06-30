import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ImageBackground, ActivityIndicator} from "react-native";
import {useRoute} from "@react-navigation/native";
import storiesData from "../../data/stories.js";

const StoryScreen = () => {

    const [userStoriesPreview, setUserStoriesPreview] = useState(null);
    const [activeStoryIndex, setActiveStoryIndex] = useState(null);
    const [activeStory, setActiveStory] = useState(null);


    const route = useRoute();


    useEffect(() => {
        const userId = route.params.userId;
        const userStories = storiesData.find(storiesData => storiesData.user.id === userId);
        console.log(userStories)

        setUserStoriesPreview(userStories);
        setActiveStoryIndex(0);
    }, []);

    useEffect(() =>  {
        setActiveStory(userStoriesPreview.stories[activeStoryIndex]);
    }, [activeStoryIndex]);

    if(!activeStory) {
        return (
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        )

    }


    return (
        <SafeAreaView>
            <ImageBackground source={{uri: activeStory.imageURI}} />
        </SafeAreaView>
    );
};

export default StoryScreen;
