import React from 'react';
import {View} from "react-native";
import { FlatList } from "react-native";
import Post from "../Post";

const data = [

    {
        user: {
            imageURI: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg',
            name: "Rokas"
        },
        imageURI: 'https://i.pinimg.com/originals/89/98/16/899816edb81459f39a5604ae711eae43.jpg',
        caption: "Amazing City #instagram",
        likesCount: 1234,
        postedAt: '6 minutes ago',
    },

    {
        user: {
            imageURI: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg',
            name: "Rokas"
        },
        imageURI: 'https://images.megapixl.com/4486/44864763.jpg',
        caption: "Amazing City #instagram",
        likesCount: 1234,
        postedAt: '6 minutes ago',
    },

    {
        user: {
            imageURI: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg',
            name: "Rokas"
        },
        imageURI: 'https://samseesworld.com/wp-content/uploads/2020/12/beach-captions-for-instagram.jpg',
        caption: "Amazing City #instagram",
        likesCount: 1234,
        postedAt: '6 minutes ago',
    },

]
const Feed = () => {
    return (
        // renders the list of photos
        <FlatList data={data} renderItem={({item}) => <Post post={item} />} />
    );
};

export default Feed;
