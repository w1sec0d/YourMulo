import React from 'react';
import { View, Image, Text, ImageBackground, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import colors from '../config/colors.js';
import AppButton from '../components/AppButton.android.js';

function WelcomeScreen() {
    return (
        <ImageBackground source={require("../assets/background.png")} blurRadius={1} resizeMode="cover" style={styles.background}>
            <View style={styles.logoContainer}>
                <Image source={require("../assets/logo-red.png")} style={styles.logo}></Image>
                <Text style={styles.slogan}>Buy & sell bikes</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="log in" color={colors.primary} style={styles.button}></AppButton>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="register" color={colors.secondary} style={styles.button}></AppButton>
            </View>
            <StatusBar style="auto" />
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logoContainer: {
        position: "absolute",
        top: 0,
        alignItems: "center"
    },
    logo: {
        width: 225,
        height: 225
    },
    slogan: {
        top: -50,
        fontFamily: "Lato_400Regular",
        fontWeight: "bold",
        fontSize: 20

    },
    buttonContainer: {
        padding: 10,
        width: "100%"
    }
})

export default WelcomeScreen;