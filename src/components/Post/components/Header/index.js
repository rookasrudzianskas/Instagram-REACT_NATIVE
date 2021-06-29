import React from 'react';
import {Text, View} from "react-native";
import ProfilePicture from "../../../ProfilePicture";

const Header = ({ imageURI, name }) => {
    return (
        <View>
            <ProfilePicture uri={imageURI} size={40} />
            <Text>{name}</Text>
        </View>
    );
};

export default Header;
