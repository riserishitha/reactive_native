import React, { useState, useEffect } from 'react';
import { TextInput, Button, StyleSheet, View } from 'react-native';

const TodoForm = ({ onSubmit, editTodo }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (editTodo) {
      setText(editTodo.text);
    }
  }, [editTodo]);

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a todo..."
        value={text}
        onChangeText={setText}
      />
      <Button title={editTodo ? 'Update' : 'Add'} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});

export default TodoForm;
