import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';

// StackNavigatorを作成
const stack = createStackNavigator();

// Stackアプリ
export function StackApp() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen
           name="Home"
           component={HomeScreen}
           options={{title: 'ホーム'}}/>
        <stack.Screen name="Detail" component={DetailScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

// TabNavigatorを作成
const tab = createBottomTabNavigator();

// Tabアプリ
export function TabApp() {
  return (
    <NavigationContainer>
      <tab.Navigator initialRouteName='Home'>
        <tab.Screen
          name='Home'
          component={HomeScreen}/>
        <tab.Screen
          name='Detail'
          component={DetailScreen}/>
      </tab.Navigator>
    </NavigationContainer>
  );
}

// Drawer
const drawer = createDrawerNavigator();

// Drawerアプリ
export function DrawerApp() {
  return (
    <NavigationContainer>
      <drawer.Navigator initialRouteName='Home'>
        <drawer.Screen
          name='Home'
          component={HomeScreen}/>
        <drawer.Screen
          name='Detail'
          component={DetailScreen}/>
      </drawer.Navigator>
    </NavigationContainer>
  );
}

// Homeスクリーン
function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>Home Screen</Text>
      <Button
        title='詳細へ'
        onPress={() => navigation.navigate('Detail')}/>
    </View>
  );
}

// 詳細スクリーン
function DetailScreen() {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>Detail Screen</Text>
    </View>
  );
}
