import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ImageBackground, ActivityIndicator, TouchableWithoutFeedback, Dimensions} from "react-native";
import {useRoute} from "@react-navigation/native";
import storiesData from "../../data/stories.js";
import styles from "./styles";

const StoryScreen = () => {

    const [userStoriesPreview, setUserStoriesPreview] = useState(null);
    const [activeStoryIndex, setActiveStoryIndex] = useState(null);
    // const [activeStory, setActiveStory] = useState(null);

    const route = useRoute();


    useEffect(() => {
        const userId = route.params.userId;
        const userStories = storiesData.find(storiesData => storiesData.user.id === userId);

        setUserStoriesPreview(userStories);
        setActiveStoryIndex(0);
    }, []);

    useEffect(() =>  {
        if(!userStoriesPreview) {
            return;
        }
        if(activeStoryIndex < 0) {
            setActiveStoryIndex(0);
            return;
        }

        if(activeStoryIndex >= userStoriesPreview.stories.length) {
            setActiveStoryIndex(userStoriesPreview.stories.length - 1);
            // return;
        }
    }, [activeStoryIndex]);

    const handleNextStory = () => {
        if(activeStoryIndex >= userStoriesPreview.stories.length - 1) {
            return;
        }
        setActiveStoryIndex(activeStoryIndex + 1);
    }

    const handlePreviousStory = () => {
        if(activeStoryIndex <= 0) {
            return;
        }
        setActiveStoryIndex(activeStoryIndex - 1);
    }

    const handlePress = (evt) => {
        const x = evt.nativeEvent.screenX;
        const screenWidth = Dimensions.get("window").width;
        let isRight = true;
        if(x < screenWidth / 2) {
            handlePreviousStory();
        } else {
            handleNextStory();
        }
    }

    if(!userStoriesPreview) {
        return (
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        )

    }

    const activeStory = userStoriesPreview.stories[activeStoryIndex];



    return (
        <SafeAreaView style={styles.container}>
                <TouchableWithoutFeedback onPress={handlePress} >
                    <ImageBackground source={{uri: activeStory.imageUri}} style={styles.image} >

                    </ImageBackground>
                </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default StoryScreen;
