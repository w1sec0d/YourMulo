import React from 'react';
import { View, Image, useWindowDimensions, StyleSheet } from 'react-native';
import colors from '../config/colors.js';
import { NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={[styles.imageButton, { backgroundColor: colors.primary, left: 20 }]} />
            <View style={[styles.imageButton, { backgroundColor: colors.secondary, right: 20 }]} />
            <Image source={require("../assets/chair.png")} style={styles.image}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        width: "100%",
        resizeMode: "contain"
    },
    imageButton: {
        width: 50,
        height: 50,
        position: "absolute",
        top: STATUSBAR_HEIGHT
    }
})

export default ViewImageScreen;
