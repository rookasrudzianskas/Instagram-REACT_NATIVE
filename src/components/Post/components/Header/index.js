import React from 'react';
import {Text, View} from "react-native";
import ProfilePicture from "../../../ProfilePicture";
import styles from "./styles";
import { Entypo } from '@expo/vector-icons';

const Header = ({ imageURI, name }) => {
    return (
        <View style={styles.container}>
            <ProfilePicture uri={imageURI} size={40} />
            <Text style={styles.name}>{name}</Text>
            <Entypo name="dots-three-vertical" size={20} color="black" />
        </View>
    );
};

export default Header;
