import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage, ProfilePage } from '../../screens';

/**
 * createNativeStackNavigator:
 * - React Navigation kütüphanesinin sağladığı native stack yapısıdır.
 * - Ekranlar arası geçişi "iOS/Android native geçiş animasyonları" ile sağlar.
 */
const Stack = createNativeStackNavigator();

/**
 * UserStack:
 * - Kullanıcı giriş yaptıktan sonra erişeceği sayfaları yöneten stack yapısıdır.
 * - `HomePage` ve `ProfilePage` ekranları bu yapının içindedir.
 * - `headerShown: false` ile sayfa başlığı gizlenmiştir.
 */
const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Profile" component={ProfilePage} />
    </Stack.Navigator>
  );
};

export default UserStack;

const styles = StyleSheet.create({});

/**
 * Notlar:
 * - Bu dosya, giriş yapmış kullanıcı için yönlendirme sistemini tanımlar.
 * - `initialRouteName`: Uygulama ilk açıldığında hangi ekranın gösterileceğini belirler. Burada "Home".
 * - `screenOptions`: Tüm sayfalarda geçerli olacak ayarları yapar. Burada başlık gizlenmiş.
 * - `HomePage` ve `ProfilePage`: Stack içinde tanımlanmış iki ayrı ekran bileşenidir.
 */
