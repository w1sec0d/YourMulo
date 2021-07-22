import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default function AppCard({ image, title, subtitle, font }) {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: "white",
            width: "90%",
            height: 325,
            borderRadius: 20
        },
        imageContainer: {
            flex: 2,
        },
        image: {
            flex: 1,
            width: "100%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
        },
        textSection: {
            flex: 1,
            backgroundColor: "white",
        },
        textContainer: {
            padding: 20,
        },
        text: {
            fontFamily: font,
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
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image}></Image>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text, styles.title}>{title}</Text>
                <Text style={styles.text, styles.subtitle}>{subtitle}</Text>
            </View>

        </View>
    );
}
