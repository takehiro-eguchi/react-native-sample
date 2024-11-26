import React from "react";
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

export default class WatchApp extends React.Component {
    // コンストラクタ
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    // ツリービューへの登録
    componentDidMount() {
        this.timerHandle = setInterval(() => {
            this.tick();
        }, 1000);
    }

    // ツリービューへの解除
    componentWillUnmount() {
        clearInterval(this.timerHandle);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <View style={styles.container} >
                <Text>現在時刻</Text>
                <Text>{this.state.date.toLocaleTimeString()}</Text>
            </View>
        );
    }
}
