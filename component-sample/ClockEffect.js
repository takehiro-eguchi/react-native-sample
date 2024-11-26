import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default function Clock() {
    // 変数
    const [date, setDate] = useState(new Date());
    const [text, setText] = useState("");

    // 引数なし（高頻度に更新されるためコメントアウト）
    // useEffect(() => {
    //     setText(prevText => prevText + "\n引数なしEffect");
    // });

    // 空引数
    useEffect(() => {
        const timerHandle = setInterval(() => {
            setDate(new Date());
        }, 1000);
        setText(prevText => prevText + "\n引数空Effect");

        return () => {
            clearInterval(timerHandle);
        };
    }, []);

    // 引数あり
    useEffect(() => {
        setText(prevText => prevText + "\n引数ありEffect");
    }, [date]);

    // 描画内容
    return (
        <View style={styles.container}>
            <Text>現在時刻：</Text><Text>{date.toLocaleTimeString()}</Text>
            <Text>{text}</Text>
        </View>
    );
}
