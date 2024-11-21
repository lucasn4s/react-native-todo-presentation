import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TodoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";
import { useEffect, useMemo, useState } from "react";
import { storeTodo, deleteTodo, getAll } from "../repositories/todoRepository";
import { router } from "expo-router";

function Index() {
    const [todoList, setTodoList] = useState([]);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            paddingVertical: 40,
            paddingHorizontal: 20,
            gap: 40,
        },
        title: {
            fontSize: 36,
            fontWeight: "bold",
        },
    });
    
    const listStyles = StyleSheet.create({
        container: {
            gap: 12,
        },
    });

    async function handleSubmitTodo(todo) {
        const newTodo = await storeTodo(todo);

        if (!newTodo) {
            return;
        }

        setTodoList([...todoList, newTodo]);
    }

    useEffect(() => {
        getAll().then((list) => setTodoList(list))
    }, []);

    function handleDeleteTodo(todo) {
        deleteTodo(todo.id)
            .then(() => setTodoList(todoList.filter(({ id }) => id !== todo.id)));
    }

    function handleTodoSelect(todo) {
        router.push({
            pathname: '/details',
            params: {
                id: todo.id,
            },
        });
    }

    const TodoItemList = useMemo(() => todoList.map((todo) =>
        <TodoItem
            key={todo.id}
            name={todo.name}
            onPress={() => handleTodoSelect(todo)}
            onDelete={() => handleDeleteTodo(todo)}
        />
    ), [todoList]);
    
    return (
        <SafeAreaView
            style={styles.container}
        >
            <Text style={styles.title}>Todo List</Text>
            <AddTodo
                onSubmit={handleSubmitTodo}
            />
            <View style={listStyles.container}>
                {TodoItemList}
            </View>
        </SafeAreaView>
    );
}

export default Index;
