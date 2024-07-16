import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomTextInput = (props) => {
    return (
        <TextInput {...props}
            style={[props.style, styles.input]}
            placeholderTextColor={props.placeholderTextColor || 'gray'}
        />
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    input: {
        borderRadius: 15,
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#fff',
        color: '#000',
        fontSize: 16,
        color: '#000',
        height: 48,
        borderWidth: 1,
        borderColor: 'gray',
        width: '100%',
        marginTop: 16,
    }
})