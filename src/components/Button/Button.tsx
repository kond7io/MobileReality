import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {primaryColor} from "../../constants/colors";

interface ButtonProps {
    text: string;
    onPressButton: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text ,onPressButton}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPressButton} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
        borderWidth: 2,
        borderColor:  primaryColor
    },
    text: {
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: primaryColor,
        paddingVertical: 10,
        paddingHorizontal: 30
    }
});

