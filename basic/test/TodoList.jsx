import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <View style={styles.container}>
      {todos.length === 0 ? (
        <Text style={styles.noTodos}>No todos available</Text>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => (
            <TodoItem todo={item} onDelete={onDelete} onEdit={onEdit} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  noTodos: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
  },
});

export default TodoList;
