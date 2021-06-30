import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: "100%",
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        width: "100%",
        justifyContent: "space-between",
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    userName: {
        color: "white",
        fontWeight: "700",
        fontSize: 18,
    },
    bottomContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    textInputContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 50,
        height: 50,
        marginHorizontal: 10,
        paddingHorizontal: 10
    },
    cameraButton: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 50,
        height: 50,
        marginHorizontal: 10,
    },
    messageButton: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: "100%",
        color: "white",
        fontSize: 16,
        // outline: 'none',
    }
});

export default styles;
