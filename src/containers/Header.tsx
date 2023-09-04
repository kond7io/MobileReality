import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {TextBox} from "./TextBox";
import {primaryColor, secondaryColor} from '../constants/colors'

interface HeaderProps {
    title: string;
    subtitle: string;
    text: string;
    secondText: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, text, secondText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <TextBox text={text} secondText={secondText} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: -1,
        color: secondaryColor
    },
    subtitle: {
        fontSize: 13,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: -1,
        color: primaryColor
    },
});

