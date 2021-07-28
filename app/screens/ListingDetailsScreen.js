import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Screen from '../components/Screen.android';
import ListItem from '../components/ListItem.android';

function ListingDetailsScreen() {
    return (
        <Screen>
            <Image source={require("../assets/bike1.jpg")} style={styles.imageStyle}></Image>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Expensive S-works</Text>
                <Text style={styles.subtitle}>$200</Text>
                <ListItem image={require("../assets/owner1.jpg")} title="Carlos Ramírez" subtitle="4 bikes" style={styles.ownerInfo}></ListItem>
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    imageStyle: {
        flex: 2,
        width: "100%"
    },
    detailsContainer: {
        flex: 3,
        padding: 20
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        textTransform: "capitalize"
    },
    subtitle: {
        fontSize: 25,
        color: "#4ECDC4",
        paddingTop: 5,
        fontWeight: "bold"
    },
    ownerInfo: {
        marginTop: 10,
        marginLeft: -10
    }
})

export default ListingDetailsScreen;