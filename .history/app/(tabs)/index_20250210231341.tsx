import { Image, StyleSheet, Platform, SafeAreaView, FlatList, View, Text, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

type Contactype = {
  name: string;
  email: string;
  poisition: string;
  photo: string;
}

const DATA = [
  {
    name: 'Nguyen Van A',
    email: 'nva@gmail.com',
    poisition: 'Developer',
    photo: 'https://th.bing.com/th/id/OIP.s2SHIZUjABr-gwswyqZhkAHaE7?w=292&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    name: 'Nguyen Van B',
    email: 'nvb@gmail.com',
    poisition: 'Tester',
    photo: 'https://th.bing.com/th/id/OIP.NmYd7NZYQyaayZ0Vokl2EgHaJ4?w=120&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    name: 'Nguyen Van C',
    email: 'nvc@gmail.com',
    poisition: 'Designer',
    photo: 'https://th.bing.com/th?q=%e1%ba%a2nh+Con+Ch%c3%b3&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247'
  },
  {
    name: 'Nguyen Van D',
    email: 'nvd@gmail.com',
    poisition: 'Manager',
    photo: 'https://th.bing.com/th/id/OIP.-LS7F4rjhiMP3cF1T-jDQAHaOi?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    name: 'Nguyen Van E',
    email: 'nve@gmail.com',
    poisition: 'Manager',
    photo: 'https://th.bing.com/th/id/OIF.wqP0MXKewvckXSJBS5GQVg?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    name: 'Nguyen Van F',
    email: 'nvf@gmail.com',
    poisition: 'Manager',
    photo: 'https://th.bing.com/th?q=H%c3%acnh+%e1%ba%a3nh&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247'
  }
];

const ContactItem = ({ contact, onEdit, onDelete }: { contact: Contactype, onEdit: () => void, onDelete: () => void }) => (
  <View style={styles.listItem}>
    <Image source={{ uri: contact.photo }} style={styles.avatar} />
    <View style={styles.titleContainer}>
      <Text style={styles.baseText}>{contact.name}</Text>
      <Text style={styles.baseText}>{contact.email}</Text>
      <Text>{contact.poisition}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onEdit} style={styles.editButton}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  </View>
);

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const newData = [];

for (let i = 0; i < 10; i++) {
  const randomName = getRandomElement(DATA).name;
  const randomEmail = getRandomElement(DATA).email;
  const randomPosition = getRandomElement(DATA).poisition;
  const randomPhoto = getRandomElement(DATA).photo;

  newData.push({
    name: randomName,
    email: randomEmail + i,
    poisition: randomPosition,
    photo: randomPhoto
  });
}

export default function HomeScreen() {
  const [contacts, setContacts] = useState(newData);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPosition, setEditPosition] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleEdit = (index) => {
    const contact = contacts[index];
    setEditName(contact.name);
    setEditEmail(contact.email);
    setEditPosition(contact.poisition);
    setCurrentIndex(index);
    setModalVisible(true);
  };

  const handleSave = () => {
    const newContacts = [...contacts];
    newContacts[currentIndex] = { ...newContacts[currentIndex], name: editName, email: editEmail, poisition: editPosition };
    setContacts(newContacts);
    setModalVisible(false);
    setEditName('');
    setEditEmail('');
    setEditPosition('');
  };

  const handleDelete = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <SafeAreaView style={{ marginTop: Platform.OS === 'android' ? 50 : 0 }}>
      <FlatList
        data={contacts}
        renderItem={({ item, index }) => (
          <ContactItem
            contact={item}
            onEdit={() => handleEdit(index)}
            onDelete={() => handleDelete(index)}
          />
        )}
        keyExtractor={item => item.email}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit Contact</Text>
            <TextInput
              style={styles.input}
              placeholder="Edit Name"
              value={editName}
              onChangeText={setEditName}
            />
            <TextInput
              style={styles.input}
              placeholder="Edit Email"
              value={editEmail}
              onChangeText={setEditEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Edit Position"
              value={editPosition}
              onChangeText={setEditPosition}
            />
            <Button title="Save" onPress={handleSave} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  listItem: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    margin: 20,
  },
  baseText: {
    fontFamily: 'Cochin',
    color: 'black',
    fontSize: 16,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  editButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  callText: {
    color: 'green',
    fontSize: 16,
    marginTop: 40,
    marginLeft: 80,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: 200,
  },
}); import { Image, StyleSheet, Platform, SafeAreaView, FlatList, View, Text, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

type Contactype = {
  name: string;
  email: string;
  poisition: string;
  photo: string;
}

const DATA = [
  {
    name: 'Nguyen Van A',
    email: 'nva@gmail.com',
    poisition: 'Developer',
    photo: 'https://th.bing.com/th/id/OIP.s2SHIZUjABr-gwswyqZhkAHaE7?w=292&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    name: 'Nguyen Van B',
    email: 'nvb@gmail.com',
    poisition: 'Tester',
    photo: 'https://th.bing.com/th/id/OIP.NmYd7NZYQyaayZ0Vokl2EgHaJ4?w=120&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    name: 'Nguyen Van C',
    email: 'nvc@gmail.com',
    poisition: 'Designer',
    photo: 'https://th.bing.com/th?q=%e1%ba%a2nh+Con+Ch%c3%b3&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247'
  },
  {
    name: 'Nguyen Van D',
    email: 'nvd@gmail.com',
    poisition: 'Manager',
    photo: 'https://th.bing.com/th/id/OIP.-LS7F4rjhiMP3cF1T-jDQAHaOi?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    name: 'Nguyen Van E',
    email: 'nve@gmail.com',
    poisition: 'Manager',
    photo: 'https://th.bing.com/th/id/OIF.wqP0MXKewvckXSJBS5GQVg?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    name: 'Nguyen Van F',
    email: 'nvf@gmail.com',
    poisition: 'Manager',
    photo: 'https://th.bing.com/th?q=H%c3%acnh+%e1%ba%a3nh&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247'
  }
];

const ContactItem = ({ contact, onEdit, onDelete }: { contact: Contactype, onEdit: () => void, onDelete: () => void }) => (
  <View style={styles.listItem}>
    <Image source={{ uri: contact.photo }} style={styles.avatar} />
    <View style={styles.titleContainer}>
      <Text style={styles.baseText}>{contact.name}</Text>
      <Text style={styles.baseText}>{contact.email}</Text>
      <Text>{contact.poisition}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onEdit} style={styles.editButton}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  </View>
);

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const newData = [];

for (let i = 0; i < 10; i++) {
  const randomName = getRandomElement(DATA).name;
  const randomEmail = getRandomElement(DATA).email;
  const randomPosition = getRandomElement(DATA).poisition;
  const randomPhoto = getRandomElement(DATA).photo;

  newData.push({
    name: randomName,
    email: randomEmail + i,
    poisition: randomPosition,
    photo: randomPhoto
  });
}

export default function HomeScreen() {
  const [contacts, setContacts] = useState(newData);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPosition, setEditPosition] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleEdit = (index) => {
    const contact = contacts[index];
    setEditName(contact.name);
    setEditEmail(contact.email);
    setEditPosition(contact.poisition);
    setCurrentIndex(index);
    setModalVisible(true);
  };

  const handleSave = () => {
    const newContacts = [...contacts];
    newContacts[currentIndex] = { ...newContacts[currentIndex], name: editName, email: editEmail, poisition: editPosition };
    setContacts(newContacts);
    setModalVisible(false);
    setEditName('');
    setEditEmail('');
    setEditPosition('');
  };

  const handleDelete = (index) => {
    setCurrentIndex(index);
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    const newContacts = [...contacts];
    newContacts.splice(currentIndex, 1);
    setContacts(newContacts);
    setDeleteModalVisible(false);
  };

  return (
    <SafeAreaView style={{ marginTop: Platform.OS === 'android' ? 50 : 0 }}>
      <FlatList
        data={contacts}
        renderItem={({ item, index }) => (
          <ContactItem
            contact={item}
            onEdit={() => handleEdit(index)}
            onDelete={() => handleDelete(index)}
          />
        )}
        keyExtractor={item => item.email}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit Contact</Text>
            <TextInput
              style={styles.input}
              placeholder="Edit Name"
              value={editName}
              onChangeText={setEditName}
            />
            <TextInput
              style={styles.input}
              placeholder="Edit Email"
              value={editEmail}
              onChangeText={setEditEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Edit Position"
              value={editPosition}
              onChangeText={setEditPosition}
            />
            <View style={styles.buttonRow}>
              <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={() => {
          setDeleteModalVisible(!deleteModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to delete this contact?</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={confirmDelete}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => setDeleteModalVisible(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  listItem: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    margin: 20,
  },
  baseText: {
    fontFamily: 'Cochin',
    color: 'black',
    fontSize: 16,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  editButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  callText: {
    color: 'green',
    fontSize: 16,
    marginTop: 40,
    marginLeft: 80,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: 250,
    borderRadius: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    width: 100,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: 'green',
  },
  cancelButton: {
    backgroundColor: 'gray',
  },
});