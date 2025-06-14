import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert, Image} from 'react-native';
import Loading from "../src/components/shareds/loading";

const LoginPage = ({navigation}) => {
    const [_email, setEmail] = useState("");
    const [_password, setPassword] = useState("");
    const [showWelcome, setShowWelcome] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const commitSave = () => {
        if (_email && _password) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false); // loading'i kapat
                setShowWelcome(true); // welcome mesajını göster
                Alert.alert("Bilgi", `${_email} ${_password}`);
            }, 1500); // 1.5 saniye sonra işlem bitmiş gibi simüle ediliyor
        } else {
            Alert.alert("Uyarı", "Alanlar boş");
        }
    }

    return (
        <Loading isLoading={isLoading}>
            <View style={styles.container}>
                <Image style={styles.images} source={require('../assets/images/login.png')}/>
                {showWelcome && <Text style={styles.welcomeText}>Welcome {_email} {_password}</Text>}

                <Text style={{marginTop: 20}}>Email</Text>
                <TextInput
                    style={styles.textInputStyles}
                    placeholder="Enter Your Email"
                    inputMode={"email"}
                    onChangeText={setEmail}
                    value={_email}
                />
                <Text>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.textInputStyles}
                    placeholder="Enter Your Password"
                    onChangeText={setPassword}
                    value={_password}
                />
                <View style={styles.buttonRow}>
                    <View style={styles.buttonWrapper}>
                        <Button title="Login" onPress={commitSave} color="green"/>
                    </View>
                    <View style={styles.signUpButton}>
                        <Button title="Sign Up" color="blue" onPress={() => navigation.navigate('SignUp')}/>
                    </View>
                </View>
            </View>
        </Loading>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke'
    },
    textInputStyles: {
        borderWidth: 2,
        width: '80%',
        height: 50,
        borderRadius: 30,
        marginVertical: 10,
        textAlign: 'center',
        fontWeight: "bold",
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 20,
    },
    images: {
        width: 100,
        height: 100,
    },
    signUpButton: {
        paddingVertical: 20,
    }
});

export default LoginPage;
