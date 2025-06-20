import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import { useSelector } from 'react-redux';
const RootNavigation = () => {

const { isAuth } = useSelector((state) => state.user);


return (
<NavigationContainer>

  {
    // Kullanıcı **giriş yapmamışsa** AuthStack'e yönlendir,
    // giriş yapmışsa (isAuth === true) UserStack'i göster
    !isAuth 
      ? <AuthStack />
      : <UserStack />
  }
</NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})