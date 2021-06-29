import React from 'react';
import {Text, View} from "react-native";
import ProfilePicture from "../../../ProfilePicture";
import styles from "./styles";
import { Entypo } from '@expo/vector-icons';

const Header = ({ imageURI, name }) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <ProfilePicture uri={imageURI} size={40} />
                <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.right}>
                <Entypo name="dots-three-vertical" size={16} />
            </View>
        </View>
    );
};

export default Header;
