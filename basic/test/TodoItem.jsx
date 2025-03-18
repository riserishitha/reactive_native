import React from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{todo.text}</Text>
      <View style={styles.buttons}>
        <Button title="Edit" onPress={() => onEdit(todo)} />
        <Button title="Delete" color="red" onPress={() => onDelete(todo.id)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default TodoItem;
