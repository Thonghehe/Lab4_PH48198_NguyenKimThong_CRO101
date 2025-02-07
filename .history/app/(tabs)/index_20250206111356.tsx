import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, FlatList, View, Text, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

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
    photo: 'https://th.bing.com/th/id/OIP.5caFL5sLJTq3masPN-WI9wHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    name: 'Nguyen Van B',
    email: 'nvb@gmail.com',
    poisition: 'Tester',
    photo: 'https://randomuser.me/api'
  },
  {
    name: 'Nguyen Van C',
    email: 'nvc@gmail.com',
    poisition: 'Designer',
    photo: 'https://randomuser.me/api'
  },
  {
    name: 'Nguyen Van D',
    email: 'nvd@gmail.com',
    poisition: 'Manager',
    photo: 'https://randomuser.me/api'
  },
  {
    name: 'Nguyen Van E',
    email: 'nve@gmail.com',
    poisition: 'Manager',
    photo: 'https://randomuser.me/api'
  },
  {
    name: 'Nguyen Van F',
    email: 'nvf@gmail.com',
    poisition: 'Manager',
    photo: 'https://randomuser.me/api'
  }
];
const ContactItem = ({ contact }: { contact: Contactype }) => (
  <View style={styles.listItem}>
    <Image source={{ uri: contact.photo }} style={styles.avatar} />
    <View style={styles.titleContainer}>
      <Text style={styles.baseText}>{contact.name}</Text>
      <Text style={styles.baseText}>{contact.email}</Text>
      <Text>{contact.poisition}</Text>
    </View>
    <TouchableOpacity>
      <Text style={styles.callText}>Call</Text>
    </TouchableOpacity>
  </View>
);
export default function HomeScreen() {
  return (
    <SafeAreaView style={{ marginTop: Platform.OS === 'android' ? 50 : 0 }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <ContactItem contact={item} />}
        keyExtractor={item => item.email}
      />
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
  },
  avatar: {
    width: 64,
    height: 64,
    margin: 20
  },
  baseText: {
    fontFamily: 'Cochin',
    color: 'black',
    fontSize: 16,
    marginTop: 10,
  },
  callText: {
    color: 'green',
    fontSize: 16,
    marginTop: 40,
    marginLeft: 80,
  }
});
