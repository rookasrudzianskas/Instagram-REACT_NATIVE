import React from "react";
import Story from "../Story";
import {View} from "react-native";

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
        <View>
            <Story imageURI={data[0].imageURI} name={data[0].name} />
            <Story imageURI={data[1].imageURI} name={data[1].name} />
            <Story imageURI={data[2].imageURI} name={data[2].name} />
            <Story imageURI={data[3].imageURI} name={data[3].name} />
        </View>
    )
}


export default Stories;
