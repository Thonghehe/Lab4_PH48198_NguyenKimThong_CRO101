import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function HomeScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Thêm logic đăng nhập của bạn ở đây
        console.log('Username:', username);
        console.log('Password:', password);
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
                <TextInput
                    style={styles.input}
                    placeholder="Mật khẩu"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
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
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 16,
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