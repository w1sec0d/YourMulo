import React from 'react';
import { View, StyleSheet, Image, Text, TouchableNativeFeedback } from 'react-native';

function Card({ image, title, subtitle, onPress, style }) {
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={[styles.container, style]}>
                <Image source={image} style={styles.image}></Image>
                <View style={styles.textContainer}>
                    <Text style={styles.text, styles.title}>{title}</Text>
                    <Text style={styles.text, styles.subtitle}>{subtitle}</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        height: 300,
        borderRadius: 15,
        overflow: "hidden",
        marginBottom: 20
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    textContainer: {
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 20,
        color: "#4ECDC4",
        paddingTop: 5
    }
})
export default Card