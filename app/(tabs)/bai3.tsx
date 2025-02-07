import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
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
        <SafeAreaView style={{ marginTop: 50, flex: 1 }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
            >
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={[styles.title, { fontSize: 30, fontWeight: 'bold' }]}>Wellcome back</Text>
                    <Image source={require('../../assets/images/OIP.jpg')} style={{ width: 300, height: 300, marginBottom: 30, marginTop: 50 }} />
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
                            <Icon name={secureTextEntry ? 'eye-off' : 'eye'} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <View style={styles.separatorContainer}>
                        <View style={styles.separator} />
                        <Text style={styles.separatorText}>Or login with</Text>
                        <View style={styles.separator} />
                    </View>
                    <View style={styles.socialButtonsContainer}>
                        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
                            <Icon name="facebook" size={24} color="#fff" />
                            <Text style={styles.socialButtonText}>Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
                            <Icon name="google" size={24} color="#fff" />
                            <Text style={styles.socialButtonText}>Google</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        marginTop: 24,
    },
    input: {
        width: '100%',
        padding: 14,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 16,
    },
    passwordContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    toggleButton: {
        position: 'absolute',
        right: 10,
        padding: 8,
        top: 1,
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
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    separatorText: {
        marginHorizontal: 10,
        fontSize: 16,
        color: '#666',
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 12,
        borderRadius: 8,
        marginHorizontal: 5,
    },
    facebookButton: {
        backgroundColor: '#3b5998',
    },
    googleButton: {
        backgroundColor: '#db4437',
    },
    socialButtonText: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 16,
    },
});