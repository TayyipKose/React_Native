import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Alert,
    Image
} from 'react-native';
import Loading from '../src/components/shareds/loading';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showWelcome, setShowWelcome] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Kullanıcı giriş bilgilerini kontrol eder.
     * Eğer tüm alanlar doluysa loading gösterir, 1.5 saniye sonra welcome mesajı verir.
     * Email ve şifre boşsa uyarı mesajı verir.
     */
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

                {/* Hoş geldiniz mesajı */}
                {showWelcome && <Text style={styles.welcomeText}>Hoş geldin, {email}!</Text>}

                {/* Email input alanı */}
                <TextInput
                    style={styles.input}
                    placeholder="Email adresiniz"
                    inputMode="email"
                    onChangeText={setEmail}
                    value={email}
                />
                {/* Password input alanı */}
                <TextInput
                    style={styles.input}
                    placeholder="Şifreniz"
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                />

                {/* Giriş yap ve kayıt ol butonları */}
                <View style={styles.buttonContainer}>
                    <Button title="Giriş Yap" onPress={commitLogin} color="#28a745" />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Kayıt Ol" onPress={() => navigation.navigate('SignUp')} color="#007bff" />
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
    input: {
        width: '90%',
        padding: 12,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 1,
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
