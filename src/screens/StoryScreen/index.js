import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ImageBackground, ActivityIndicator, TouchableWithoutFeedback, Dimensions} from "react-native";
import {useRoute} from "@react-navigation/native";
import storiesData from "../../data/stories.js";
import styles from "./styles";

const StoryScreen = () => {

    const [userStoriesPreview, setUserStoriesPreview] = useState(null);
    const [activeStoryIndex, setActiveStoryIndex] = useState(null);
    const [activeStory, setActiveStory] = useState(null);

    console.log(activeStory)
    const route = useRoute();


    useEffect(() => {
        const userId = route.params.userId;
        const userStories = storiesData.find(storiesData => storiesData.user.id === userId);

        setUserStoriesPreview(userStories);
        setActiveStoryIndex(0);
    }, []);

    const handlePress = (evt) => {
        const x = evt.nativeEvent.locationX;
        const screenWidth = Dimensions.get("window").width;
        console.log(screenWidth)
        let isRight = false;
        if(x < screenWidth / 2) {
            isRight = true;
        }

        console.log("isRight" + isRight);
    }

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
        <SafeAreaView style={styles.container}>
                <TouchableWithoutFeedback onPress={handlePress} >
                    <ImageBackground source={{uri: activeStory.imageUri}} style={styles.image} >

                    </ImageBackground>
                </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default StoryScreen;
