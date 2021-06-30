import React from "react";
import {Text, View} from "react-native";
import ProfilePicture from "../ProfilePicture";
import styles from "./style"

const Story = ({ imageURI, name }) => {
    return (
        <View>
            <ProfilePicture uri={imageURI} />
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default Story;
