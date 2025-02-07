import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, FlatList, View, Text, TouchableOpacity, RefreshControl, StatusBar, StatusBarStyle } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';



export default function Bai2() {
    const [barStyle, setBarStyle] = useState<StatusBarStyle>('light-content');
    const [refreshing, setRefreshing] = React.useState(false);
    const [backgroundColor, setBackgroundColor] = useState('blue');
    const onRefresh = () => {
        setRefreshing(true);
        // Thêm logic làm mới của bạn ở đây
        setTimeout(() => {
            setRefreshing(false);
            setBackgroundColor(backgroundColor === 'blue' ? 'green' : 'blue'); // Đổi màu nền
        }, 1000);
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

        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});