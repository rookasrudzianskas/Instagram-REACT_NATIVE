import React from "react";
import {View} from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const Post = ({post: { user }}) => {
    return (
        <View>
            <Header imageURI={user.imageURI} name={user.name} />
            <Body />
            <Footer />
        </View>
    )
}

export default Post;
