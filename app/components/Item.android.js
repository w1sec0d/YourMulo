import React from 'react';
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function Item({ name, backgroundColor = colors.black, iconColor = colors.white, text, size = 50, onPress }) {
    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.white,
        },
        iconContainer: {
            backgroundColor: backgroundColor,
            borderRadius: size / 2,
            width: size,
            height: size,
            padding: 10,
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center"
        },

        text: {
            marginLeft: 10,
            fontWeight: "bold",
            textTransform: "capitalize"
        }
    })
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name={name} color={iconColor} size={size / 1.7} style={styles.icon}></MaterialCommunityIcons>
                </View>
                {text && <Text style={styles.text}>{text}</Text>}
            </View>
        </TouchableNativeFeedback>
    );
}

export default Item;