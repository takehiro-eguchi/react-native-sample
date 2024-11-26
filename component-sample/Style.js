import React from "react";
import { View, Text, StyleSheet, BackHandler } from "react-native";

// スタイル
const styles = StyleSheet.create({
    black: {
        color: '#000000'
    },
    bigGray: {
        color: '#888888',
        fontSize: 24
    },
    transView: {
        height: 120,
        width: 240,
        padding: 3,
        backgroundColor: '#775500',
        transform: [
            {rotateX: '45deg'},
            {rotateZ: '0.785398rad'},
            {skewX: '125deg'}
        ]
    }
});

export default function StyleApp() {
    return (
        <View>
            <Text style={styles.black}>黒文字</Text>
            <Text style={styles.bigGray}>大きい灰色文字</Text>
            <Text style={[styles.black, styles.bigGray]}>大きい灰色文字に黒文字を上書き</Text>
            <Text style={[styles.bigGray, styles.black]}>黒文字に大きい灰色文字を上書き</Text>
            <View style={styles.transView}/>
            <View style={styles.transView}/>
            <Text>
                この文章の中で
                <Text style={{textDecorationLine: 'underline'}}>この部分だけは下線付き</Text>
                です
            </Text>
        </View>
    );
}
