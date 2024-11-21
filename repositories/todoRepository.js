import AsyncStorage from "@react-native-async-storage/async-storage";

export async function storeTodo(todo) {
    const id = Math.floor(Math.random() * 1000).toString();

    try {
        await AsyncStorage.setItem(id, JSON.stringify(todo));
        return ({
            ...todo,
            id,
        });
    } catch(error) {
        return null;
    }
}

export const getTodo = (id) => new Promise(async (resolve, reject) => {
    const todo = await AsyncStorage.getItem(id);

    if (!todo) {
        reject(new Error('erro ao buscar todo'));
    }

    resolve(JSON.parse(todo));
});

export function deleteTodo(id) {
    return AsyncStorage.removeItem(id);
}

export async function getAll() {
    try {
        const keys = await AsyncStorage.getAllKeys();

        if (keys.length === 0) {
            return [];
        }

        const todoList = await AsyncStorage.multiGet(keys);

        return todoList.map(([id, todo]) => ({
            id,
            ...JSON.parse(todo),
        }));
    } catch (error) {
        throw new Error(error);
    }
};
