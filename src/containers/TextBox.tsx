import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {secondaryColor} from "../constants/colors";

interface TextBoxProps {
    text: string;
    secondText: string;
}

export const TextBox: React.FC<TextBoxProps> = ({ text, secondText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Text style={[styles.text, styles.secondText]}>{secondText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 20
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        color: secondaryColor
    },
    secondText: {
       marginTop: 20
    },
});

