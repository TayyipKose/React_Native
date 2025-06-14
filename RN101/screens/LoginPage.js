import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Button,
    Alert,
    Image
} from 'react-native';
import Loading from '../src/components/shareds/loading';
import InputWithLabel from '../src/components/shareds/InputWithLabel';
import CustomButton from '../src/components/shareds/CustomButton';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showWelcome, setShowWelcome] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const commitLogin = () => {
        if (email && password) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setShowWelcome(true);
                Alert.alert('Giriş Başarılı', `${email} ile giriş yapıldı.`);
            }, 1500);
        } else {
            Alert.alert('Uyarı', 'Lütfen tüm alanları doldurun.');
        }
    };

    return (
        <Loading isLoading={isLoading}>
            <SafeAreaView style={styles.container}>
                <Image style={styles.logo} source={require('../assets/images/login.png')} />

                {showWelcome && <Text style={styles.welcomeText}>Hoş geldin, {email}!</Text>}

                {/* Burada InputWithLabel kullanıyoruz */}
                <InputWithLabel
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email adresiniz"
                    inputMode="email"
                    align="center"
                />

                <InputWithLabel
                    label="Şifre"
                    value={password}
                    onChangeText={setPassword}
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
 * Notlarım:
 * - `useState`: React'in hook'udur. Bileşen içinde dinamik veriler (email, şifre, loading durumu vb.) tutmak için kullanılır.
 * - `SafeAreaView`: iPhone gibi çentikli cihazlarda içeriklerin çentiğe girmemesini sağlar. Tüm sayfayı kapsayan güvenli alan.
 * - `TextInput`: Kullanıcının metin girişi yapmasını sağlar. Email ve şifre girişi gibi yerlerde kullanılır.
 * - `Button`: Kullanıcının etkileşime geçmesini sağlar. Giriş yap, kayıt ol gibi eylemleri tetikler.
 * - `Alert`: Mobilde sistem popup mesajları göstermek için kullanılır.
 * - `Image`: Görsel veya logo eklemek için kullanılır.
 * - `StyleSheet`: CSS benzeri yapı sağlar. Görsel düzenleme işlevlerini tanımlar.
 */
