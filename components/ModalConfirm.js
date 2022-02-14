import React from 'react'
import { StyleSheet, Text, View, Modal, Button } from 'react-native'

const ModalConfirm = ({ modalVisible, handleConfirmDelete, itemSelected }) => {
    return (
        <Modal style={styles.modal} visible={modalVisible} animationType='slide' transparent >
            <View style={styles.modalContent} >
                <View>
                    <Text>¿Desea eliminar?</Text>
                    <Text>{itemSelected.value}</Text>
                </View>
                <View>
                    <Button
                        onPress={handleConfirmDelete}
                        title='Confirmar'
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 2,
        height: 150,
        backgroundColor: `#ff6347`,
    }

})

export default ModalConfirm
