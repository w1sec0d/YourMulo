import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, TouchableNativeFeedback } from 'react-native';
import AppText from './AppText.android';

function AppPickerItem({ title, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{title}</AppText>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    text: {
        padding: 20,
        fontWeight: "700",
        width: "100%",
    }
})
export default AppPickerItem;