import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Modal } from 'react-native';

const MyList = () => {
  const [items, setItems] = useState(['item 1', 'item 2', 'item 3']);
  const [modalVisible, setModalVisible] = useState(false);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setModalVisible(false);
    setNewItem('');
  };

  return (
    <View>
      {items.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
      <Button title="Add Item" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modal}>
          <TextInput
            style={styles.input}
            multiline={true}
            value={newItem}
            onChangeText={setNewItem}
          />
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
            <Button title="Add" onPress={handleAddItem} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  button: {
    margin: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 100,
    width: '50%',
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});

export default MyList;