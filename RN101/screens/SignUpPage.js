import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';
import Loading from '../src/components/shareds/loading';
import InputWithLabel from '../src/components/shareds/InputWithLabel';

const SignUpPage = ({ navigation }) => {
    const [signUpEmail, setSignUpemail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');

    const signUpCommitSave = (email, password) => {
        if (email && password) {
            alert('Kayıt işlemi başarılı!');
            navigation.navigate('Login_Page');
        } else {
            alert('Bilgilerin tamamını doldurunuz!');
        }
    };

    return (
        <Loading>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Kayıt Ol</Text>

                {/* Email için shared input */}
                <InputWithLabel
                    label="Email"
                    value={signUpEmail}
                    onChangeText={setSignUpemail}
                    placeholder="Email adresiniz"
                    inputMode="email"
                    align="left"
                />

                {/* Şifre için shared input */}
                <InputWithLabel
                    label="Şifre"
                    value={signUpPassword}
                    onChangeText={setSignUpPassword}
                    placeholder="Şifreniz"
                    secureTextEntry={true}
                    align="left"
                />

                <View style={styles.buttonContainer}>
                    <Button title="Kayıt Ol" onPress={() => signUpCommitSave(signUpEmail, signUpPassword)} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Login Ekranı" onPress={() => navigation.navigate('Login_Page')} color="red" />
                </View>
            </SafeAreaView>
        </Loading>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        marginBottom: 30,
        fontWeight: 'bold',
        color: '#333',
    },
    buttonContainer: {
        width: '90%',
        marginVertical: 5,
    },
});

export default SignUpPage;
