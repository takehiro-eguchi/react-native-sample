import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { List, Title, FAB } from "react-native-paper";
import { format } from 'date-fns/format';
import { useNavigation } from '@react-navigation/native';
import { loadAll } from "./store";

// const memos = [
//     {
//         text: 'メモメモメモ',
//         createdAt: Date.parse("2024-11-30 00:00:00")
//     },
//     {
//         text: 'メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ',
//         createdAt: Date.parse("2024-11-30 01:00:00")
//     },
//     {
//         text: 'メモメモメモ',
//         createdAt: Date.parse("2024-11-30 02:00:00")
//     }
// ];

// メインスクリーン
export const MainScreen = () => {
    // ナビゲータ取得
    const navigation = useNavigation();

    // メモデータ
    const [ memos, setMemos ] = useState([]);

    // エフェクト
    useEffect(() => {
        // 表示処理でメモを読み込み
        const initialize = async () => {
            const loadMemos = await loadAll();
            setMemos(loadMemos);
        };

        // 終了時処理
        const unsubscribe = navigation.addListener('focus', initialize);
        return unsubscribe;
    }, [navigation]);

    // 新規作成イベント
    const onPressAdd = () => {
        navigation.navigate('Compose');
    };

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={memos}
                keyExtractor={item => `${item.createdAt}`}
                renderItem={
                    ({item}) => (
                        <List.Item
                            title={item.text}
                            titleNumberOfLines={5}
                            description={
                                `作成日時: ${format(item.createdAt, 'yyyy.MM.dd HH:mm')}`}
                            descriptionStyle={{textAlign: 'right'}}/>
                    )}
                    />
            <FAB 
                style={{
                    position: 'absolute',
                    right: 16,
                    bottom: 16
                }}
                icon='plus'
                onPress={onPressAdd}/>
        </View>
    );
};

// スタイル
const styles = StyleSheet.create({
    container: {
        flex: 1 
    },
    list: {
        flex: 1
    }
});