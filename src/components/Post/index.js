import React from "react";
import {View} from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const Post = ({post }) => {
    return (
        <View>
            <Header imageURI={post.user.imageURI} name={post.user.name} />
            <Body imageURI={post.imageURI} />
            <Footer postedAt={post.postedAt} caption={post.caption} likesCount={post.likesCount}/>
        </View>
    )
}

export default Post;
