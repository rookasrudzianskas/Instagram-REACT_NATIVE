import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: "100%",
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%",
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
    },
    userName: {
        color: "white",
        fontWeight: "500",
        fontSize: 18,
    }
});

export default styles;
