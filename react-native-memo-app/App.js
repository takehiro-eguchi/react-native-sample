import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from "react-native-paper";
import { MainScreen } from "./src/MainScreen";

// Stackナビゲーター
const stack = createStackNavigator();

// アプリケーション
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name='Main'
            component={MainScreen}
            options={{
              title: 'メモ帳'
            }}/>
        </stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}