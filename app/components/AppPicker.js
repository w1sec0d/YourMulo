import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Modal, FlatList, View } from 'react-native';
import defaultStyles from '../config/styles'
import { Icon } from 'react-native-elements';
import AppPickerItem from './AppPickerItem';
import AppText from './AppText.android';

function AppPicker({ icon, items, onSelectItem, selectedItem, placeholder }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.pickerContainer}>
                    <Icon name={icon} type="material-community" style={styles.icon}></Icon>
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <Icon
                        name="chevron-down"
                        type="material-community"
                        style={styles.downIcon}
                    />
                </View >
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <View style={styles.closeIconContainer}>
                    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                        <Icon
                            name="close"
                            reverse
                        />
                    </TouchableWithoutFeedback>
                </View>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.value.toString()}
                    renderItem={({ item }) =>
                        <AppPickerItem title={item.label}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item)
                            }
                            } />
                    }
                />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    pickerContainer: {
        backgroundColor: defaultStyles.colors.light,
        padding: 15,
        borderRadius: 20,
        flexDirection: "row",
        marginVertical: 10,
        alignItems: "center",
    },
    text: {
        marginLeft: 10,
        flex: 1,
    },
    closeIconContainer: {
        alignItems: "center"
    }
})

export default AppPicker;