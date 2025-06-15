import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Alert,
    Image
} from 'react-native';
import Loading from '../src/components/shareds/loading';
import InputWithLabel from '../src/components/shareds/InputWithLabel';
import CustomButton from '../src/components/shareds/CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPassword, setIsLoading, setLogin } from '../src/redux/userSlice';

const LoginPage = ({ navigation }) => {
    /** 
     * Redux'tan user state'ini alıyoruz
     * email, password, isLoading ve isAuth değerlerini kullanacağız
     */
    const { email, password, isLoading, isAuth } = useSelector(state => state.user);
    const dispatch = useDispatch();

    /** 
     * Hoş geldin mesajını göstermek için local state
     */
    const [showWelcome, setShowWelcome] = useState(false);

    /**
     * Kullanıcı giriş yapmaya çalıştığında çağrılır.
     * Email veya şifre boşsa uyarı verir.
     * Redux'a dispatch ile loading durumu ve login kontrolü gönderilir.
     */
    const commitLogin = () => {
        if (!email || !password) {
            Alert.alert('Uyarı', 'Lütfen tüm alanları doldurun.');
            return;
        }

        dispatch(setIsLoading(true));
        dispatch(setLogin()); // isAuth burada güncellenir
        dispatch(setIsLoading(false));
    };

    /**
     * isAuth değiştiğinde burası tetiklenir.
     * isAuth true ise hoş geldin mesajı gösterilir.
     * Yanlış giriş yapılmışsa uyarı verir.
     * Konsola isAuth durumunu basar.
     */
    useEffect(() => {
        if (isAuth) {
            setShowWelcome(true);
            console.log('Giriş başarılı, artık user router render edilecek.');
        } else if (email && password) {
            Alert.alert('Hata', 'Email veya şifre yanlış.');
        }
    }, [isAuth]);

    return (
        <Loading isLoading={isLoading}>
            <SafeAreaView style={styles.container}>
                <Image style={styles.logo} source={require('../assets/images/login.png')} />

                {showWelcome && <Text style={styles.welcomeText}>Hoş geldin, {email}!</Text>}

                <InputWithLabel
                    label="Email"
                    value={email}
                    onChangeText={(text) => dispatch(setEmail(text))}
                    placeholder="Email adresiniz"
                    inputMode="email"
                    align="center"
                />

                <InputWithLabel
                    label="Şifre"
                    value={password}
                    onChangeText={(text) => dispatch(setPassword(text))}
                    placeholder="Şifreniz"
                    secureTextEntry={true}
                    align="center"
                />

                <View style={styles.buttonContainer}>
                    <CustomButton
                        title="Giriş Yap"
                        onPress={commitLogin}
                        backgroundColor="#28a745"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton
                        title="Kayıt Ol"
                        onPress={() => navigation.navigate('SignUp')}
                        backgroundColor="#007bff"
                    />
                </View>
            </SafeAreaView>
        </Loading>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 30,
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
        marginBottom: 20,
    },
    buttonContainer: {
        width: '90%',
        marginVertical: 5,
    },
});

export default LoginPage;


/**
React hook'ları:
useState: Bileşen içinde değişen, yerel durumu tutar (örn: showWelcome mesajını göstermek için).
useSelector: Redux store’dan istediğin state verisini alır (örn: email, password, isLoading).
useDispatch: Redux store’a eylem (action) göndermek için kullanılır.

Redux:
store: Tüm uygulamanın merkezi veri deposu.
slice (userSlice): Store içinde bir parçayı yönetir (örn: kullanıcı bilgileri).
action (setEmail, setPassword, setIsLoading): State’i değiştirmek için çağrılan fonksiyonlar.
dispatch: Action’ları store’a ileten fonksiyon.
useSelector ile store’dan veri okunur, dispatch ile store’daki veriler güncellenir.
 */
