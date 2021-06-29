import React from 'react';
import {View, Text, Image} from "react-native";
import styles from "./styles";

const Body = ({ imageURI }) => {
    return (
        <View>
            <Image source={{uri: imageURI}} style={styles.image} />
        </View>
    );
};

export default Body;
