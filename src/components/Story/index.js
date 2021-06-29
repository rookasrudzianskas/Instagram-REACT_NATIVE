import React from "react";
import {Text, View} from "react-native";
import ProfilePicture from "../ProfilePicture";

const Story = ({ imageURI, name }) => {
    return (
        <View>
            <ProfilePicture uri={imageURI} />
            <Text>{name}</Text>
        </View>
    )
}

export default Story;
