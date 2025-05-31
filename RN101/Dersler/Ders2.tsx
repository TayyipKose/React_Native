import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

const Ders2 = () => {
    const [_name, setName] = useState("");
    const [_lastName, setLastname] = useState("");
    const [showWelcome, setShowWelcome] = useState(false);

    const commitSave = () => {
        if (_name && _lastName) {
            setShowWelcome(true);
            Alert.alert("Bilgi", `${_name} ${_lastName}`);
        } else {
            setShowWelcome(false);
            Alert.alert("Uyarı", "Alanlar boş");
        }
    };

    return (
        <View style={styles.container}>
            {showWelcome && <Text style={styles.welcomeText}>Welcome {_name} {_lastName}</Text>}

            <Text>Ad</Text>
            <TextInput
                style={styles.textInputStyles}
                placeholder="Enter Your Name"
                onChangeText={setName}
                value={_name}
            />
            <Text>Soyad</Text>
            <TextInput
                style={styles.textInputStyles}
                placeholder="Enter Your Surname"
                onChangeText={setLastname}
                value={_lastName}
            />
            <View>
                <Button title="Kaydet" onPress={commitSave} color="green" />
            </View>
        </View>
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
        marginBottom: 20,
    }
});

export default Ders2;
