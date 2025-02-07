import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, FlatList, View, Text, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
export default function HomeScreen() {
    return (
        <SafeAreaView style={{ marginTop: Platform.OS === 'android' ? 50 : 0 }}>
            <ScrollView>

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
    }
});