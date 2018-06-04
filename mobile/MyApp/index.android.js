/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import App from './app/js/index';
// import SplashScreen from "react-native-splash-screen";
export default class MyApp extends Component {
    componentDidMount()  {
        // SplashScreen.hide();//关闭启动屏幕
    }
    render() {
        return (
            <App></App>
        );
    }
}
AppRegistry.registerComponent('MyApp', () => MyApp);
