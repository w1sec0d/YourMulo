import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from './AppText.android';

function ErrorMessage({ visible, children }) {
    const styles = StyleSheet.create({
        error: {
            color: "red",
        }
    })
    if (!children || !visible) { return null }
    else if (visible) {
        return (
            <AppText style={styles.error}>{children}</AppText>
        );
    }
}
export default ErrorMessage;