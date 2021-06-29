import React, {useEffect, useState} from 'react';
import {Text, View, TouchableWithoutFeedback} from "react-native";
import styles from "./styles";
import {AddOutlined} from "@material-ui/icons";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Footer = ({ likesCount: likesCountProp, caption, postedAt }) => {

    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const onLikePressed = () => {
        setIsLiked(!isLiked);
        const amount = isLiked ? -1 : 1;
        setLikesCount(likesCount + amount);
    }

    useEffect(() =>  {
        setLikesCount(likesCountProp);
    }, []);




    return (
        <View style={styles.container}>

        <View style={styles.iconsContainer} >
            <View style={styles.leftIcons}>
                <TouchableWithoutFeedback onPress={onLikePressed}>
                    {!isLiked ? (
                        <AntDesign name="hearto" size={24} color={"#545454"}/>
                    ) : (
                        <AntDesign name="heart" size={24} color="red" />
                    )}
                </TouchableWithoutFeedback>
                <FontAwesome name="comments-o" size={24} color={"#545454"} />
                <Ionicons name="ios-paper-plane-outline" size={24} color={"#545454"} />
            </View>
                <FontAwesome name="bookmark-o" size={24}  color={"#545454"}/>
            </View>

            <Text style={styles.likes}>{likesCount} likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    );
};

export default Footer;
