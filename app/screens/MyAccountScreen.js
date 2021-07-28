import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Screen from '../components/Screen.android';

const menuItems = [
    {
        title: "My Bikes",
        icon: {
            name: "bicycle",
            backgroundColor: colors.danger
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    },
]

function MyAccountScreen() {
    return (
        <Screen style={styles.mainContainer}>
            <ListItem
                image={require("../assets/owner1.jpg")}
                title="Carlos Ramírez"
                subtitle="cadavid4003@gmail.com"
                imageSize={80}
                style={styles.item}
            />
            <View style={styles.itemContainer}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.title}
                    renderItem={
                        ({ item }) => (
                            <ListItem
                                title={item.title}
                                IconComponent={
                                    <Icon
                                        reverse
                                        reverseColor={colors.white}
                                        name={item.icon.name}
                                        backgroundColor={item.icon.backgroundColor}
                                        type='material-community'
                                    />
                                }
                                style={styles.item}
                            />
                        )
                    }
                />
            </View>
            <View>
                <ListItem
                    IconComponent={
                        <Icon
                            reverse
                            reverseColor={colors.white}
                            name='logout'
                            color="#ffe66d"
                            type='material-community'
                        />
                    }
                    title="Log out"
                    style={styles.item}
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.light,
    },
    itemContainer: {
        marginVertical: 20,
    },
    item: {
        padding: 5
    }
})
export default MyAccountScreen;