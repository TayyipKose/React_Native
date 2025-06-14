import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert, Image} from 'react-native';

const ProfilePage = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome to Profile Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ProfilePage;
