import { Text, View, Pressable } from "react-native";
import styles from "./styles";

export default ({ name, onDelete, onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            <View style={styles.buttons}>
                <Pressable
                    style={({pressed}) => styles.delete(pressed)}
                    onPress={() => onPress()}
                >
                    <Text>
                        Detalhes
                    </Text>
                </Pressable>
                <Pressable
                    style={({pressed}) => styles.delete(pressed)}
                    onPress={() => onDelete()}
                >
                    <Text>
                        Excluir
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};
