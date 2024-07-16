// components/TodoItem.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const TodoItem = ({ todo, toggleTodoStatus, editTodo, deleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);
    const [newContent, setNewContent] = useState(todo.content);

    return (
        <View style={styles.todoItem}>
            {isEditing ? (
                <>
                    <TextInput
                        value={newTitle}
                        onChangeText={setNewTitle}
                        style={styles.input}
                    />
                    <TextInput
                        value={newContent}
                        onChangeText={setNewContent}
                        style={styles.input}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            editTodo(todo.id, newTitle, newContent);
                            setIsEditing(false);
                        }}
                    >
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <Text style={todo.completed ? styles.completed : styles.text}>{todo.title}</Text>
                    <Text style={todo.completed ? styles.completed : styles.text}>{todo.content}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => toggleTodoStatus(todo.id)}>
                        <Text style={styles.buttonText}>
                            {todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
                        </Text>
                    </TouchableOpacity>
                </>
            )}
            <TouchableOpacity
                style={[styles.button, styles.editButton]}
                onPress={() => setIsEditing(!isEditing)}
            >
                <Text style={styles.buttonText}>{isEditing ? "Cancel" : "Edit"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.deleteButton]}
                onPress={() => deleteTodo(todo.id)}
            >
                <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    todoItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
    },
    text: {
        fontSize: 18,
    },
    completed: {
        fontSize: 18,
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    editButton: {
        backgroundColor: '#FFA500',
    },
    deleteButton: {
        backgroundColor: '#FF0000',
    }
});

export default TodoItem;
