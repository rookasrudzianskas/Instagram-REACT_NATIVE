import React from "react";
import {Text} from "react-native";
import Stories from "../../components/Stories";
import Post from "../../components/Post";

const post = {
    user: {
        imageURI: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg',
        name: "Rokas"
    }
}

const HomeScreen = () => {
   return (
      <>
         <Stories />
          <Post post={post} />
      </>
)
}

export default HomeScreen;
