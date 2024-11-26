import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function FlexboxApp() {
    return (
        <SafeAreaView style={styles.container}>
            <WidthHeight/>
            <MarginPadding/>
            <Flexbox/>
            <View style={styles.button}/>
        </SafeAreaView>
    );
}

const WidthHeight = () => (
    <View style={styles.widthHeight}>
        <Text>200 x 100</Text>
    </View>
);

const MarginPadding = () => (
    <View style={styles.marginPadding}>
        <Text>コンテンツ</Text>
    </View>
);

const Flexbox = () => (
    <View style={styles.flexBox}>
        <Text style={styles.item}>Item 1</Text>
        <Text style={styles.item}>Item 2</Text>
        <Text style={styles.item}>Item 3</Text>
        <Text style={styles.item}>Item 4</Text>
        <Text style={styles.item}>Item 5</Text>
        <Text style={styles.item}>Item 6</Text>
    </View>
);

// スタイル
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    widthHeight: {
        width: 200,
        height: 100,
        // 枠線を付ける
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#bbb'
    },
    marginPadding: {
        margin: 72,
        padding: 16,
    },
    flexBox: {
        // display: 'flex',    // デフォルトがflexなので設定不要
        flexDirection: "row",    // 横方向に並べる
        flexWrap: 'wrap'    // 折り返し
    },
    item: {
        width: 100,
        height: 100,
        borderWidth: StyleSheet.hairlineWidth,  // 枠線
        borderColor: '#bbb',
        textAlign: 'center'
    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        // 右下に配置
        position: 'absolute',
        right: 16,
        bottom: 16
    }
});
