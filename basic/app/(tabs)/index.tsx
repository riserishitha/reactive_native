import React, { useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import TodoForm from '@/test/TodoForm';
import TodoList from '@/test/TodoList';

export default function HomeScreen() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const editTodoHandler = (todo) => {
    setEditTodo(todo);  
  };

  const addTodo = (text) => {
    if (editTodo) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editTodo.id ? { ...todo, text } : todo
      );
      setTodos(updatedTodos);
      setEditTodo(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const deleteTodo = (id) => {
    console.log('Deleting ID:', id);
    Alert.alert('Confirm', 'Are you sure you want to delete this todo?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        onPress: () => {
          const filteredTodos = todos.filter((todo) => todo.id !== id);
          setTodos(filteredTodos);
        },
      },
    ]);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<ThemedText style={styles.header}>Todo App</ThemedText>}
    >
      <ThemedView style={styles.container}>
        <TodoForm onSubmit={addTodo} editTodo={editTodo} />
        <TodoList 
          todos={todos} 
          onDelete={deleteTodo} 
          onEdit={editTodoHandler}  
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
});
