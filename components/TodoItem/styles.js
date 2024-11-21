import { StyleSheet } from "react-native";

export default StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        gap: 8,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    delete: (pressed) => ({
        borderWidth: 1,
        borderRadius: 12,
        padding: 20,
        opacity: pressed ? 0.5 : 1,
    }),
    name: {
        fontSize: 20,
        fontWeight: 'medium',
    },
});
