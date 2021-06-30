import React from "react";
import Story from "../UserStoryPreview";
import {View, FlatList} from "react-native";
import styles from "./styles";
import storiesData from "../../data/stories";


const Stories = () => {
    return (
        <FlatList style={styles.container} showsHorizontalScrollIndicator={false} keyExtractor={({name}) => name} horizontal data={storiesData} renderItem={({item}) => <Story imageURI={item.imageURI} name={item.name} />} />
    )
};


export default Stories;
