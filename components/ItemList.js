import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

const ItemList = ({ itemList, handleOnDelete }) => {
    return (
        <FlatList
            data={itemList}
            // render item recibe un objeto
            renderItem={({ item }) => {
                return (
                    <View style={styles.item}>
                        <Text style={styles.text} >{item.value}</Text>

                        {/* <TouchableOpacity
          style={styles.check}
            onPress={()=>{}}
            >
              <Text>&#x2714;</Text>
          </TouchableOpacity> */}

                        <TouchableOpacity
                            style={styles.delete}
                            onPress={() => handleOnDelete(item)}
                        >
                            <Text>X</Text>
                        </TouchableOpacity>

                    </View>
                )
            }}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 7,
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    // itemCheck: {
    //     padding: 10,
    //     marginVertical: 7,
    //     borderColor: 'black',
    //     borderWidth: 1,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     backgroundColor: 'green'
    // },
    text: {
        flex: 1,
        color: 'blue',
        fontWeight: 'bold'
    },
    // check: {
    //     backgroundColor: 'green',
    //     height: 20,
    //     width: 30,
    //     alignItems: 'center',
    //     marginRight: 20
    // },
    delete: {
        backgroundColor: 'red',
        height: 20,
        width: 30,
        alignItems: 'center',
    },
})

export default ItemList
