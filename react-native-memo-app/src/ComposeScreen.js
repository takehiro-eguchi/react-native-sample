import React, { useState } from "react";
import { 
    StyleSheet,
    KeyboardAvoidingView,
    Platform
 } from "react-native";
 import { TextInput, Button } from "react-native-paper";
 import { useNavigation } from '@react-navigation/native';
 import { save } from './store';

// メモ作成画面
export const ComposeScreen = () => {
    // テキスト
    const [ text, setText ] = useState('');

    // ナビゲーション取得
    const navigation = useNavigation();

    // 保存処理（保存後、元の画面に戻る）
    const onPressSave = async () => {
        await save(text, Date.now());
        navigation.goBack();
    };

    // 画面
    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput
                style={{ 
                    marginBottom: 16,
                    textAlignVertical: 'center'
                 }}
                mode="outlined"
                placeholder="メモを入力してください"
                multiline
                onChangeText={(text) => setText(text)}/>
            <Button
                mode="contained"
                onPress={onPressSave}>
                保存
            </Button>
        </KeyboardAvoidingView>
    );
};

// スタイル
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});