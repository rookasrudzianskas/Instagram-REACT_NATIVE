import React from "react";
import {Image, View} from "react-native";
import styles from "./styles";

const ProfilePicture = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg'}} />
        </View>
        )
}

export default ProfilePicture;
