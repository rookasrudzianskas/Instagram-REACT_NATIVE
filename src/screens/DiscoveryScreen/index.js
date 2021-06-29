import React from "react";
import {View, Text, SafeAreaView} from "react-native";

const DiscoveryScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "blue", height: 1500}}>
                <Text style={{ textAlign: "center", marginTop: 300, fontSize: 30, color: 'white'}}>Discovery</Text>
            </View>
        </SafeAreaView>
    )
}

export default DiscoveryScreen;
