import React from 'react';
import { Text, StyleSheet, View, TouchableNativeFeedback } from 'react-native';
import colors from '../config/colors'
import AppText from './AppText.android';
import { Lato_400Regular } from '@expo-google-fonts/lato';


function Button({ color = colors.primary, title, fontFamily, fontColor = colors.white, onPress, style }) {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: color,
            borderRadius: 25,
            width: "100%",
            padding: 15,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10
        },
        buttonText: {
            color: fontColor,
            textTransform: "uppercase",
            fontWeight: "bold",
            fontFamily: "Lato_400Regular",
            fontSize: 18
        }
    })
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={[styles.button, style]}>
                <AppText style={[styles.buttonText, { fontFamily: fontFamily }]}>{title}</AppText>
            </View>
        </TouchableNativeFeedback>
    )
}
export default Button