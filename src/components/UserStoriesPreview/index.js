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

    const fetchStories = async () => {
        try {
            const storiesData = await API.graphql(graphqlOperation(listStorys));
            console.log("Stories", storiesData);
            setStories(storiesData.data.listStorys.items);
        } catch (e) {

        }
    }

    return (
        <FlatList style={styles.container} showsHorizontalScrollIndicator={false} keyExtractor={({user: {id}}) => id} horizontal data={storiesData} renderItem={({item}) => <Story story={item} />} />
    )
};


export default Stories;
