import React from 'react';
import {Text, View} from "react-native";
import styles from "./styles";
import {AddOutlined} from "@material-ui/icons";
import { AntDesign } from '@expo/vector-icons';

const Footer = ({ likesCount, caption, postedAt }) => {
    return (
        <View style={styles.container}>
            <View>
                <AntDesign name="hearto" size={24} color="black" />

            </View>
            <Text style={styles.likes}>{likesCount} likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    );
};

export default Footer;
