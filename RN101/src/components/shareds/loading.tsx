import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';

type Props = {
    isLoading?: boolean;          // Loading durumunu kontrol eden opsiyonel boolean prop
    children: React.ReactNode;    //children: React.ReactNode yazarsan, o component'in içine her türlü React öğesini (text, element, başka component vs.) koyabilirsin anlamına gelir.
    /*
      Burada Props (özellikler) tipini tanımlıyoruz.
      React component'lerine dışarıdan veri (özellik) geçirmek için props kullanılır.

      isLoading prop'u, component'in "yükleniyor" modunda mı olduğunu belirtmek için kullanılır.
      Örneğin, yükleniyorsa spinner göster, değilse normal içeriği göster gibi.

      children ise component içine yerleştirilen alt elementlerdir.
      Mesela, <Loading> ...buraya yazılanlar children olur...</Loading>

      Props, component'in davranışını ve görünümünü dışarıdan kontrol etmeye yarar.
    */
};

const Loading = ({ isLoading = false, children }: Props) => {
    // Eğer isLoading true ise, yükleniyor ekranını göster
    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                {/* Dönen yükleniyor simgesi */}
                <ActivityIndicator size="large" color="#blue" />
                {/* Yükleniyor yazısı */}
                <Text style={styles.loadingText}>Yükleniyor...</Text>
            </View>
        );
    }

    // isLoading false ise çocuk komponentleri normal şekilde göster
    return <>{children}</>;
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,                        // Tam ekran kapsaması için
        justifyContent: 'center',      // Yükleniyor öğelerini dikeyde ortala
        alignItems: 'center',          // Yükleniyor öğelerini yatayda ortala
        backgroundColor: '#f5f5f5',    // Arka plan rengi (açık gri)
    },
    loadingText: {
        marginTop: 10,                 // Yükleniyor yazısı ile spinner arasına boşluk
        fontSize: 16,                  // Yazı boyutu
    },
});

export default Loading;
