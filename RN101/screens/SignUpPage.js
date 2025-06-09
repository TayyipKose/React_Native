import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
} from 'react-native';
import Loading from '../src/components/shareds/loading';

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

                <TextInput
                    style={styles.input}
                    placeholder="Email adresiniz"
                    inputMode="email"
                    onChangeText={setSignUpemail}
                    value={signUpEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Şifre"
                    secureTextEntry
                    onChangeText={setSignUpPassword}
                    value={signUpPassword}
                />

                <View style={styles.buttonContainer}>
                    <Button title="Kayıt Ol" onPress={() => signUpCommitSave(signUpEmail, signUpPassword)} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Login Ekranı" onPress={() => navigation.navigate('Login_Page')} />
                </View>
            </SafeAreaView>
        </Loading>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2', // Açık gri arka plan
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
    input: {
        width: '90%',
        padding: 12,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    buttonContainer: {
        width: '90%',
        marginVertical: 5,
    },
});

export default SignUpPage;
