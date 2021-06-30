import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from "react-native";
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

        setUserStoriesPreview(userStories);
        setActiveStoryIndex(0);
    }, []);

    useEffect(() =>  {
        setActiveStory(userStoriesPreview.stories[activeStoryIndex]);
    }, [])


    return (
        <SafeAreaView>
            <Text>Rokas</Text>
        </SafeAreaView>
    );
};

export default StoryScreen;
