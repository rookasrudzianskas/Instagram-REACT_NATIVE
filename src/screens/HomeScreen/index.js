import React from "react";
import {Text} from "react-native";
import Stories from "../../components/Stories";
import Post from "../../components/Post";

const post = {
    user: {
        imageURI: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg',
        name: "Rokas"
    },
    imageURI: 'https://i.pinimg.com/originals/89/98/16/899816edb81459f39a5604ae711eae43.jpg',
    caption: "Amazing City #instagram",
    likesCount: 1234,
    postedAt: '6 minutes ago',
}

const HomeScreen = () => {
   return (
      <>
         <Stories />
          <Post post={post} imageURI={post.imageURI} caption={post.caption} likesCount={post.likesCount} postedAt={post.postedAt} />
      </>
)
}

export default HomeScreen;
