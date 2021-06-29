import React from 'react';
import {Text, View} from "react-native";
import styles from "./styles";

const Footer = ({ likesCount, caption, postedAt }) => {
    return (
        <View>
            <Text>{likesCount} likes</Text>
            <Text>{caption}</Text>
            <Text>{postedAt}</Text>
        </View>
    );
};

export default Footer;
