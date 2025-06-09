import React from 'react';
import {StyleSheet} from 'react-native';
import LoginPage from "./screens/loginPage";
import SignUpPage from "./screens/SignUpPage";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name="Login_Page"
                    component={LoginPage}
                />
                <Stack.Screen name="SignUp" component={SignUpPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});

export default App;
