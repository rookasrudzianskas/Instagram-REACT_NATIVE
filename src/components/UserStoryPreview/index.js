import React from "react";
import {Text, TouchableHighlight, View} from "react-native";
import ProfilePicture from "../ProfilePicture";
import styles from "./style"

const Story = ({ imageURI, name }) => {

    const onPress = () => {
        console.log("User Story Pressed");
    }
    return (
        <TouchableHighlight style={styles.container} onPress={onPress}>
            <ProfilePicture uri={imageURI} />
            <Text style={styles.name}>{name}</Text>
        </TouchableHighlight>
    )
}

export default Story;
