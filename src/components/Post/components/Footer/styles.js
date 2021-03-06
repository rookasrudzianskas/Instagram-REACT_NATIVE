import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    likes: {
        fontWeight: "bold",
        margin: 3,
    },
    caption: {
        margin: 3,
    },
    postedAt: {
        color: "#8c8c8c",
        margin: 3,
    },
    container: {
        margin: 5,
    },
    leftIcons: {
        flexDirection: "row",
        width: 100,
        justifyContent: "space-between",

    },

    iconsContainer: {
        flexDirection: "row",
        padding: 5,
        justifyContent: "space-between",
    }
});

export default styles;
