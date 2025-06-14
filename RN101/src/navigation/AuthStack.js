import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginPage, HomePage, ProfilePage, SignUpPage } from "../../screens";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator 
        initialRouteName='Login_Page' //default ilk sayfa ayarlaması
        screenOptions={{ headerShown: false }} //üstte default gelen navigator iconunu kaldırıyoruz
        >
            <Stack.Screen name="Login_Page" component={LoginPage} />
            <Stack.Screen name="SignUp" component={SignUpPage} />

        </Stack.Navigator>
    )
};

export default AuthStack;

const styles = StyleSheet.create({});
