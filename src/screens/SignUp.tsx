import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';
import userService from '../services/UserService';

export default function SignUp({ navigation }: { navigation: any }) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async () => {
        if (!fullName || !email || !mobile || !password || !confirmPassword) {
            Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Lỗi', 'Mật khẩu xác nhận không khớp.');
            return;
        }

        try {
            const response = await userService.register({ name: fullName, email, mobile, password });
            Alert.alert('Thành công', 'Đăng ký thành công!', [
                { text: 'OK', onPress: () => navigation.navigate('Home') }
            ]);
        } catch (error) {
            Alert.alert('Lỗi', 'Đăng ký thất bại. Vui lòng thử lại.');
        }
    };

    return (
        <View style={styles.mainView}>
            <View style={styles.topView}>
                <Text style={styles.txtVXT}>VXT</Text>
            </View>

            <ScrollView style={styles.bottomView}>
                {/* Icon quay lại màn hình đăng nhập */}
                <Entypo name="chevron-left" size={50} color="#fff" style={styles.iconStyle} onPress={() => navigation.navigate('SignIn')} />
                <Text style={styles.txtWelcomeBack}>
                    Create {'\n'}
                    account
                </Text>
                {/* Form nhập */}
                <View style={styles.formView}>
                    <TextInput placeholder="Full name*" placeholderTextColor="#fff" style={styles.textInput} value={fullName} onChangeText={setFullName} />
                    <TextInput placeholder="Email address*" placeholderTextColor="#fff" style={styles.textInput} value={email} onChangeText={setEmail} keyboardType="email-address" />
                    <TextInput placeholder="Mobile*" placeholderTextColor="#fff" style={styles.textInput} value={mobile} onChangeText={setMobile} keyboardType="phone-pad" />
                    <TextInput placeholder="Password*" placeholderTextColor="#fff" secureTextEntry style={styles.textInput} value={password} onChangeText={setPassword} />
                    <TextInput placeholder="Confirm password*" placeholderTextColor="#fff" secureTextEntry style={styles.textInput} value={confirmPassword} onChangeText={setConfirmPassword} />
                    {/* Nút đăng ký */}
                    <TouchableOpacity style={styles.btnSignUp} onPress={handleSignUp}>
                        <Text style={styles.txtSignUp}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    topView: {
        width: '100%',
        height: '30%',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        width: '100%',
        height: '70%',
        backgroundColor: '#000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    txtVXT: {
        fontSize: 100,
    },
    txtWelcomeBack: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 20,
        fontFamily: 'Amoresa'
    },
    iconStyle: {
        marginTop: 20,
        marginLeft: 10
    },
    formView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
    },
    textInput: {
        width: '90%',
        height: 52,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        padding: 5,
        marginTop: 20,
        color: '#fff'
    },
    btnSignUp: {
        width: '90%',
        height: 52,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    txtSignUp: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});

