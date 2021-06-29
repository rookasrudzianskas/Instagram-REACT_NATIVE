import React from "react";
import {View, Text, SafeAreaView} from "react-native";

const ProfileScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "yellow", height: 1500}}>
                <Text style={{ textAlign: "center", marginTop: 300, fontSize: 30, color: 'white'}}>ProfileScreen</Text>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen;
