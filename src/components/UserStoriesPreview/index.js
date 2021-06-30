import React from "react";
import Story from "../UserStoryPreview";
import {View, FlatList} from "react-native";
import styles from "./styles";
import storiesData from "../../data/stories";


const Stories = () => {
    return (
        <FlatList style={styles.container} showsHorizontalScrollIndicator={false} keyExtractor={({user: {id}}) => id} horizontal data={storiesData} renderItem={({item}) => <Story story={item} />} />
    )
};


export default Stories;
