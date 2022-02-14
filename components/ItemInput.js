import React from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

const ItemInput = ({ textInput, handleChangeText, handleOnPress }) => {
    return (
        <View
            style={styles.inputContainer}
        >
            <TextInput
                style={styles.input}
                value={textInput}
                onChangeText={handleChangeText}
            />
            <Button
                onPress={handleOnPress}
                title='Agregar'
            />
        </View>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderColor: 'blue',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 100,
        overflow: 'hidden'
    },
    input: {
        flex: 1,
    },

})

export default ItemInput