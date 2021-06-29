import React from "react";
import {Image} from "react-native";
import styles from "./styles";

const ProfilePicture = () => {
    return (
        <>
            <Image style={styles.image} source={{ uri: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg'}} />
        </>
        )
}

export default ProfilePicture;
