import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { View } from 'react-native';

export default function AppText({ children, size = 20, bold, capitalize, style }) {
    let [fontsLoaded] = useFonts({
        Lato_400Regular,
        Lato_700Bold
    });
    if (!fontsLoaded) {
        return (<View></View>)
    } else {
        const styles = StyleSheet.create({
            text: {
                fontFamily: bold ? "Lato_700Bold" : "Lato_400Regular",
                fontSize: size,
                textTransform: capitalize ? "capitalize" : "none"
            }
        })
        return (
            <Text style={[styles.text, style]}>
                {children}
            </Text>
        );
    }
}

