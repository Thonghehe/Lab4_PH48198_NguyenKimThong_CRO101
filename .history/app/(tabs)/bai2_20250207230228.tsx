import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, FlatList, View, Text, TouchableOpacity, RefreshControl, StatusBar, StatusBarStyle } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';



export default function HomeScreen() {
    const [barStyle, setBarStyle] = useState<StatusBarStyle>('light-content');
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        // Add your refresh logic here
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };
    return (
        <SafeAreaView style={{ marginTop: Platform.OS === 'android' ? 50 : 0 }}>
            <ScrollView style={styles.container}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <StatusBar
                    barStyle={barStyle}
                    translucent
                    backgroundColor={'transparent'} />
                <Text style={styles.text}>Kéo xuống để đổi màu</Text>
            </ScrollView>
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
        position: 'absolute'
    },
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});