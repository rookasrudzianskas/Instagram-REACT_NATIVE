import React, {useEffect, useState} from "react";
import Story from "../UserStoryPreview";
import {View, FlatList} from "react-native";
import styles from "./styles";
import storiesData from "../../data/stories";
import {API, graphqlOperation} from "aws-amplify";
import {listStorys} from "../../graphql/queries";

const Stories = () => {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetchStories();
    }, []);

    const fetchStories = () => {

    }

    return (
        <FlatList style={styles.container} showsHorizontalScrollIndicator={false} keyExtractor={({user: {id}}) => id} horizontal data={storiesData} renderItem={({item}) => <Story story={item} />} />
    )
};


export default Stories;
