import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../src/redux/userSlice'; // yolunu ayarla
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

const handleLogout = () => {
  dispatch(logout()); // isAuth = false olur
  // yönlendirmeye gerek yok, RootNavigation zaten otomatik AuthStack'e geçecek
};

  return (
    <View style={styles.container}>
      <Text>Welcome to Home</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
  },
});

export default HomePage;