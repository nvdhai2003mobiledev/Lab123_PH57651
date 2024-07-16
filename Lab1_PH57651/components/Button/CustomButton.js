import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButton = ({children}) => {
  return (
    <Pressable style = {styles.button}>
        {children}
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        width: '90%',
        height: 46,
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: '#49A5B8',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
    }
})