import React from 'react';
import {Text, View} from "react-native";
import ProfilePicture from "../../../ProfilePicture";
import styles from "./styles";

const Header = ({ imageURI, name }) => {
    return (
        <View style={styles.container}>
            <ProfilePicture uri={imageURI} size={40} />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

export default Header;
