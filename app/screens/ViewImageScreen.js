import React from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import Screen from '../components/Screen.android.js';
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import colors from '../config/colors.js';

function ViewImageScreen() {
    return (
        <Screen style={styles.container}>
            <View style={[styles.button, { left: 20 }]} >
                <MaterialCommunityIcons color="white" name="close" size={35} />
            </View>
            <View style={[styles.button, { right: 20 }]} >
                <MaterialCommunityIcons color="white" name="trash-can-outline" size={35} />
            </View>
            <Image source={require("../assets/chair.png")} style={styles.image}></Image>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black
    },
    image: {
        flex: 1,
        width: "100%",
        resizeMode: "contain"
    },
    button: {
        position: "absolute",
        top: StatusBar.currentHeight

    }
})

export default ViewImageScreen;
