import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import { Lato_400Regular } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import defaultStyles from '../config/styles'


function AppTextInput({ icon, iconColor = "black", ...otherProps }) {
    let [fontsLoaded] = useFonts({
        Lato_400Regular
    })
    if (!fontsLoaded) {
        return (
            <AppLoading></AppLoading>
        )
    } else {
        return (
            <View style={styles.container}>
                {icon &&
                    <Icon
                        name={icon}
                        color={iconColor}
                        style={styles.icon}
                        type="material-community"
                    />
                }
                <TextInput
                    style={[styles.textInput, defaultStyles.text]}
                    {...otherProps}
                />
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        backgroundColor: defaultStyles.colors.light,
        padding: 15,
        borderRadius: 20,
        marginVertical: 10
    },
    textInput: {
        marginLeft: 10,
        flex: 1,
        height: "100%"
    },
})
export default AppTextInput;