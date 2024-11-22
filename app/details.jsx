import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getTodo } from "../repositories/todoRepository";

const Details = () => {
    const { id } = useLocalSearchParams();
    const [todo, setTodo] = useState({});

    useEffect(() => {
        getTodo(id)
            .then((todoInfo) => {
                setTodo(todoInfo);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <View>
            <Text>
                Nome: {todo.name}
            </Text>
            <Text>
                Descrição: {todo.description}
            </Text>
        </View>
    );
}

export default Details;
