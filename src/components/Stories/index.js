import React from "react";
import Story from "../Story";
import {View, FlatList} from "react-native";

const data = [
    {
        imageURI: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg',
        name: 'Rokas',
    },

    {
        imageURI: 'https://randomuser.me/api/portraits/men/18.jpg',
        name: 'John',
    },

    {
        imageURI: 'https://randomuser.me/api/portraits/men/28.jpg',
        name: 'James',
    },

    {
        imageURI: 'https://randomuser.me/api/portraits/men/29.jpg',
        name: 'Tim',
    },



]
const Stories = () => {
    return (
        <FlatList keyExtractor={({name}) => name} orientation={'horizontal'} data={data} renderItem={({item}) => <Story imageURI={item.imageURI} name={item.name} />} />
    )
}


export default Stories;
