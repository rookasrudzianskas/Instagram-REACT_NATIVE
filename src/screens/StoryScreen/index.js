import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ImageBackground, ActivityIndicator, TouchableWithoutFeedback, Dimensions} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import storiesData from "../../data/stories.js";
import styles from "./styles";

const StoryScreen = () => {

    const [userStoriesPreview, setUserStoriesPreview] = useState(null);
    const [activeStoryIndex, setActiveStoryIndex] = useState(null);
    // const [activeStory, setActiveStory] = useState(null);

    const route = useRoute();
    const userId = route.params.userId;
    const navigation = useNavigation();
    console.log(userId);


    useEffect(() => {
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

    const navigateToNextUser = () => {
        navigation.navigate("Story", {userId: (parseInt(userId) + 1).toString() });
    }

    const handleNextStory = () => {
        if(activeStoryIndex >= userStoriesPreview.stories.length - 1) {
            navigateToNextUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex + 1);
    }

    const navigateToPreviousUser = () => {
        navigation.navigate("Story", {userId: (parseInt(userId) - 1).toString() });

    }

    const handlePreviousStory = () => {
        if(activeStoryIndex <= 0) {
            navigateToPreviousUser();
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
