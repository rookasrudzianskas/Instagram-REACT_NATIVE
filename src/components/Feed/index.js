import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from "react-native";
import { FlatList } from "react-native";
import Post from "../Post";
import Stories from "../UserStoriesPreview";
import {API, graphqlOperation} from "aws-amplify";
import { listPosts} from "../../graphql/queries";

const data = [

    {
        id: '1',
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
        id: '2',
        user: {
            imageURI: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg',
            name: "Rokas"
        },
        imageURI: 'https://images.megapixl.com/4486/44864763.jpg',
        caption: "Amazing City #instagram",
        likesCount: 1234,
        postedAt: '5 minutes ago',
    },

    {
        id: '3',
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

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const postData = await API.graphql(graphqlOperation(listPosts));
            setPosts(postData.data.listPosts.items);
            console.log(postData.data.listPosts.items);
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <SafeAreaView>
        {/*// renders the list of photos*/}
            <FlatList showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false} data={posts} renderItem={({item}) => <Post post={item} />} keyExtractor={({id}) => id} ListHeaderComponent={Stories} />
        </SafeAreaView>
    );
};

export default Feed;
