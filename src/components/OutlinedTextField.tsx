import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface OutlinedTextFieldProps {
    maxLength?: number;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
    placeholder?: string;
}

const OutlinedTextField: React.FC<OutlinedTextFieldProps> = ({
    maxLength,
    value,
    onChangeText,
    keyboardType,
    placeholder,
}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                maxLength={maxLength}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                placeholder={placeholder}
                placeholderTextColor="#797bb8"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181938',
        borderRadius: 8,
        elevation: 2,
        marginHorizontal: 16,
        marginVertical: 8,
        borderColor: '#b9bbed',
        borderWidth: 2,
    },
    input: {
        height: 48,
        paddingHorizontal: 16,
        fontSize: 18,
        fontWeight: '700',
        color: '#b9bbed',
    },
});

export default OutlinedTextField;
