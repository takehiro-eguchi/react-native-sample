import React, {useState} from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

// フックを利用したカウンターアプリ
export default function CounterHookApp() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Button title="-1" onPress={() => setCount(count - 1)} />
            <Text>{count}</Text>
            <Button title="+1" onPress={() => setCount(count + 1)} />
        </View>
    );
}