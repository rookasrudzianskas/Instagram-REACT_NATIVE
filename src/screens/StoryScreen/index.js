import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ImageBackground, ActivityIndicator} from "react-native";
import {useRoute} from "@react-navigation/native";
import storiesData from "../../data/stories.js";
import styles from "./styles";

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
        if(userStoriesPreview && userStoriesPreview.stories.length > activeStoryIndex -1){
            setActiveStory(userStoriesPreview.stories[activeStoryIndex]);
        }
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
            <ImageBackground source={{uri: activeStory.imageURI}} style={styles.image} >
            </ImageBackground>
        </SafeAreaView>
    );
};

export default StoryScreen;
