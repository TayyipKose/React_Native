import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert, Image} from 'react-native';

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome to Home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default HomePage;
