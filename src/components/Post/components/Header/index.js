import React from 'react';
import {Text, View} from "react-native";
import ProfilePicture from "../../../ProfilePicture";
import styles from "./styles";
import {MoreVert} from "@material-ui/icons";

const Header = ({ imageURI, name }) => {
    return (
        <View style={styles.container}>
            <ProfilePicture uri={imageURI} size={40} />
            <Text style={styles.name}>{name}</Text>
            <MoreVert />
        </View>
    );
};

export default Header;
