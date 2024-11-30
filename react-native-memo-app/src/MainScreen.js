import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { List, Title } from "react-native-paper";
import { format } from 'date-fns/format';

const memos = [
    {
        text: 'メモメモメモ',
        createdAt: Date.parse("2024-11-30 00:00:00")
    },
    {
        text: 'メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ',
        createdAt: Date.parse("2024-11-30 01:00:00")
    },
    {
        text: 'メモメモメモ',
        createdAt: Date.parse("2024-11-30 02:00:00")
    }
];

// メインスクリーン
export const MainScreen = () => {
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