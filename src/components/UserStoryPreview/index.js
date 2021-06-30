import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import ProfilePicture from "../ProfilePicture";
import styles from "./style"
import {useNavigation} from "@react-navigation/native";

const Story = ({ imageURI, name }) => {

    const navigation = useNavigation();

    const onPress = () => {
        // console.log("User Story Pressed");
        navigation.navigate("Story");

    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
                <ProfilePicture uri={imageURI} />
                <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
}

export default Story;
