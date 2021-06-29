import React from "react";
import {View, Text, SafeAreaView} from "react-native";

const CreatePostScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "green", height: 1500}}>
                <Text style={{ textAlign: "center", marginTop: 300, fontSize: 30, color: 'white'}}>CreatePostScreen</Text>
            </View>
        </SafeAreaView>
    )
}

export default CreatePostScreen;
