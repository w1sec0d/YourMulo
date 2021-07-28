import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

function Screen({ children, style }) {
    const styles = StyleSheet.create({
        screen: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
        }
    })
    return (
        <View style={[styles.screen, style]}>
            {children}
        </View>
    );
}
export default Screen;