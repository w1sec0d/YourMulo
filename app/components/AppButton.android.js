import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, TouchableNativeFeedback } from 'react-native';
import colors from '../config/colors'
export default function AppButton({ title, fontFamily, color, onPress }) {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: color,
            borderRadius: 25,
            width: "100%",
            padding: 15,
            alignItems: "center",
            justifyContent: "center",
        },
        buttonText: {
            color: colors.white,
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 18
        }
    })
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.button}>
                <Text style={[styles.buttonText, { fontFamily: fontFamily }]}>{title}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}
