import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ders1 = () => {
    return (
        <View style={styles.container}>

            {/* ÜST SATIR */}
            <View style={styles.row}>
                <View style={[styles.box, { backgroundColor: 'red' }]} />
                <View style={[styles.box, { backgroundColor: 'green' }]} />
                <View style={[styles.box, { backgroundColor: 'blue' }]} />
            </View>

            {/* 2. SATIR – Geniş dikdörtgen + kare */}
            <View style={styles.row}>
                <View style={[styles.wideBox, { backgroundColor: 'purple' }]} />
                <View style={[styles.box, { backgroundColor: 'gray' }]} />
            </View>

            {/* ORTA 1 SATIR */}
            <View style={styles.row}>
                <View style={[styles.box, { backgroundColor: 'purple' }]} />
                <View style={[styles.box, { backgroundColor: 'gray' }]} />
                <View style={[styles.box, { backgroundColor: 'brown' }]} />
            </View>

            {/* ORTA 2 SATIR */}
            <View style={styles.row}>
                <View style={[styles.box, { backgroundColor: 'orange' }]} />
                <View style={[styles.box, { backgroundColor: 'yellow' }]} />
                <View style={[styles.box, { backgroundColor: 'lightgreen' }]} />
            </View>

            <View style={styles.row}>
                <View style={[styles.box, { backgroundColor: 'pink' }]} />
                <View style={[styles.box, { backgroundColor: 'purple' }]} />
                <View style={[styles.box, { backgroundColor: 'black' }]} />
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Tüm ekranın yüksekliğini kapla (tam sayfa)
        justifyContent: 'space-between', // Satırları dikeyde dağıtır: üstte, ortada, altta
        paddingVertical: 20, //üstten ve alttan 20 birim boşluk bırak (padding-top & padding-bottom)
    },
    row: {
        marginTop: 10,
        flexDirection: 'row',            // Yatay eksende (soldan sağa) sıralama yap: kutular yan yana gelsin
        justifyContent: 'space-between', // Kutular arasında eşit boşluk bırak: biri sola, biri ortaya, biri sağa yerleşir
        marginHorizontal: 20,            // Sol ve sağdan 20 birim boşluk bırak: ekran kenarına yapışmasın
    },
    box: {
        width: '30%',
        aspectRatio: 1,
        borderWidth: 2,
        borderColor:'red',
        borderRadius:20,
    },
    wideBox: {
        width: '65%',
        height: 100,
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 20,
    },
});

export default ders1;
