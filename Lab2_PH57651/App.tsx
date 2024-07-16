// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import TodoItem from './components/TodoItem';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [completedCount, setCompletedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    const completed = todos.filter(todo => todo.completed).length;
    const pending = todos.length - completed;
    setCompletedCount(completed);
    setPendingCount(pending);
  }, [todos]);

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), title, content, completed: false }]);
    setTitle('');
    setContent('');
  };

  const toggleTodoStatus = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, newTitle, newContent) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, title: newTitle, content: newContent } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <Text>Completed: {completedCount} | Pending: {pendingCount}</Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            toggleTodoStatus={toggleTodoStatus}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
});

export default App;
