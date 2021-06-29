import React from "react";
import {View, Text, SafeAreaView} from "react-native";

const NotificationsScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "red", height: 1500}}>
                <Text style={{ textAlign: "center", marginTop: 300, fontSize: 30, color: 'white'}}>NotificationsScreen</Text>
            </View>
        </SafeAreaView>
    )
}

export default NotificationsScreen;
