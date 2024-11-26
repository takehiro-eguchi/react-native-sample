import React from "react";
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

export default class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    onPressMinusOne = () => {
        this.setState({count: this.state.count - 1});
    };
    // onPressMinusOne() {
    //     this.setState({count: this.state.count - 1});
    // }

    onPressPlusOne = () => {
        this.setState({count: this.state.count + 1});
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="-1" onPress={this.onPressMinusOne} />
                <Text>{this.state.count}</Text>
                <Button title="+1" onPress={this.onPressPlusOne} />
            </View>
        );
    }
}
