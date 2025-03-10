import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Welcome({ navigation }: { navigation: any }) {
    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const user = await AsyncStorage.getItem('user');
                setTimeout(() => {
                    if (user) {
                        navigation.replace("Home"); // Nếu đã đăng nhập, vào Home
                    } else {
                        navigation.replace("SignIn"); // Nếu chưa, vào SignIn
                    }
                }, 2000);
            } catch (error) {
                console.error("Lỗi kiểm tra đăng nhập:", error);
                navigation.replace("SignIn");
            }
        };

        checkLoginStatus();
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.txtVXT}>VXT</Text>
            <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtVXT: {
        fontSize: 100,
        color: '#fff'
    },
});
