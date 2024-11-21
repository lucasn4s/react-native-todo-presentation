import { useState } from "react";
import { TextInput, View, Text, StyleSheet, Pressable } from "react-native";
import styles from "./styles";

export default (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const inputStyles = StyleSheet.create({
        container: {
            minHeight: 120,
            gap: 8,
        },
        input: {
            borderWidth: 1,
            borderRadius: 12,
            flex: 1,
            padding: 10,
            minHeight: 50,
        },
    });

    function handleSubmit() {
        props.onSubmit({
            name,
            description,
        });

        setName('');
        setDescription('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nova tarefa</Text>
            <View style={inputStyles.container}>
                <TextInput
                    style={inputStyles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Informe o nome da nova tarefa"
                />
                <TextInput
                    style={inputStyles.input}
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Informe a descrição da nova tarefa"
                />
            </View>
            <Pressable
                style={styles.button}
                onPress={() => handleSubmit()}
            >
                {({pressed}) => (
                    <Text style={styles.buttonText(pressed)}>
                        Adicionar
                    </Text>
                )}
            </Pressable>
        </View>
    );
}
