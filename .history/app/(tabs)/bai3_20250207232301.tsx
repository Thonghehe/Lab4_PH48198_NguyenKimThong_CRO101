import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const toggleSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    return (
        <SafeAreaView style={{ marginTop: Platform.OS === 'android' ? 50 : 0 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Đăng nhập</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Tên đăng nhập"
                    value={username}
                    onChangeText={setUsername}
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Mật khẩu"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={secureTextEntry}
                    />
                    <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.toggleButton}>
                        <Icon name={secureTextEntry ? 'eye-off' : 'eye'} size={24} color="black " />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Đăng nhập</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
    },
    input: {
        width: '100%',
        padding: 12,
        height: 48,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 16,
    },
    passwordContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    toggleButton: {
        // position: 'absolute',
        right: 10,
        // padding: 10,
    },
    toggleButtonText: {
        color: '#007BFF',
    },
    button: {
        width: '100%',
        padding: 12,
        backgroundColor: '#007BFF',
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});