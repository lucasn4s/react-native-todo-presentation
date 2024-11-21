import { StyleSheet } from "react-native";

export default StyleSheet.create({
    button: ({ pressed }) => ({
        borderRadius: 12,
        justifyContent: 'center',
        padding: 12,
        backgroundColor: pressed ? 'lightBlue' : 'blue',
        minHeight: 50,
    }),
    buttonText: (pressed) => ({
        color: pressed ? 'black' : 'white',
        alignSelf: 'center',
    }),
    container: {
        gap: 24,
        width: '100%',
    },
    title: {
        fontSize: 24,
    },
});
