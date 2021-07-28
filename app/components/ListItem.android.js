import React from 'react';
import { View, Image, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import AppText from './AppText.android';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../config/colors';

function ListItem({ style, image, IconComponent, imageSize = 80, title = "My title", titleStyle, subtitle, subtitleStyle, onPress, renderRightActions }) {
    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            backgroundColor: colors.white,
        },
        imageContainer: {
            padding: 8
        },
        imageStyle: {
            width: imageSize,
            height: imageSize,
            resizeMode: "contain",
            borderRadius: imageSize * 4,
        },
        textContainer: {
            justifyContent: "center",
            paddingLeft: 5
        },
        title: {
            fontWeight: "bold",
            marginBottom: subtitle ? 5 : 0
        },
        subtitle: {
            color: "gray"
        }
    })
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableNativeFeedback onPress={onPress}>
                <View style={[styles.container, style]}>
                    {IconComponent}
                    {image &&
                        <View style={styles.imageContainer}>
                            <Image source={image} style={styles.imageStyle}></Image>
                        </View>
                    }
                    <View style={styles.textContainer}>
                        <AppText capitalize style={[styles.title, titleStyle]}>{title}</AppText>
                        {subtitle && <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>}
                    </View>
                </View>
            </TouchableNativeFeedback>
        </Swipeable>
    );
}

export default ListItem;