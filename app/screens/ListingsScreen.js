import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Screen from '../components/Screen.android';
import Card from '../components/Card.android';
import colors from '../config/colors';

const initialBikes = [
    {
        id: 1,
        image: require("../assets/bike1.jpg"),
        title: "S-Works Expensive Bike",
        subtitle: "$300"
    },
    {
        id: 2,
        image: require("../assets/bike2.png"),
        title: "Common Bike",
        subtitle: "$200"
    },
];
function ListingsScreen() {
    const [getBikes, setBikes] = useState(initialBikes)
    const [refreshing, setRefreshing] = useState(false)
    return (
        <Screen style={styles.container}>
            <FlatList
                data={getBikes}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Card image={item.image} title={item.title} subtitle={item.subtitle} />}
                refreshing={refreshing}
                onRefresh={() => setBikes([
                    {
                        id: 2,
                        image: require("../assets/bike2.png"),
                        title: "Common Bike",
                        subtitle: "$200"
                    },
                ])}
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        paddingHorizontal: 20
    },
})

export default ListingsScreen;