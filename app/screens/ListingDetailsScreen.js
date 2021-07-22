import React from 'react';
import { Image, Text, View, StyleSheet, ViewPropTypes } from 'react-native';

function ListingDetailsScreen({ title, subtitle, image, ownerImage, ownerName, ownerListings }) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.imageStyle}></Image>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <View style={styles.ownerContainer}>
                    <Image source={ownerImage} style={styles.ownerImage}></Image>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageStyle: {
        flex: 2,
        width: "100%"
    },
    detailsContainer: {
        flex: 3,
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "capitalize"
    },
    subtitle: {
        fontSize: 20,
        color: "#4ECDC4",
        paddingTop: 5
    },
    ownerContainer: {
        padding: 20
    },
    ownerImage: {

    }
})

export default ListingDetailsScreen;