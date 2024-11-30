import React, { useState } from "react";
import { 
    StyleSheet,
    KeyboardAvoidingView,
    Platform
 } from "react-native";
 import { TextInput, Button } from "react-native-paper";

// メモ作成画面
export const ComposeScreen = () => {
    // テキスト
    const [ text, setText ] = useState('');

    // 保存処理
    const onPressSave = () => {

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