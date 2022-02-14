import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Modal, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import ItemInput from './components/ItemInput';
import ModalConfirm from './components/ModalConfirm'
import ItemList from './components/ItemList';

export default function App() {
  const [textInput, setTextInput] = useState('')
  const [itemList, setItemList] = useState([])

  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const handleChangeText = (text) => {
    setTextInput(text)
  }

  const handleOnPress = () => {
    setItemList([
      ...itemList,
      {
        value: textInput,
        id: Math.random().toString(),
      }
    ])
    setTextInput('')
  }

  const handleOnDelete = (item) => {
    setModalVisible(true)
    setItemSelected(item)

  }

  const handleConfirmDelete = () => {
    const { id } = itemSelected
    setItemList(itemList.filter(res => res.id !== id))
    setModalVisible(false)
    setItemSelected({})
  }


  return (
    <View style={styles.container}>
      {/* titulo */}
      <View>
        <Text style={styles.title } >LISTA DE TAREAS</Text>
      </View>

      {/* input  */}
      <ItemInput 
      textInput={textInput}
      handleChangeText={handleChangeText}
      handleOnPress={handleOnPress}
      />
      {/* listado de elementos */}
      <ItemList 
      itemList={itemList} 
      handleOnDelete={handleOnDelete}
      />
      {/* <FlatList
        data={itemList}
        // render item recibe un objeto
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={styles.text} >{item.value}</Text>

              <TouchableOpacity
              style={styles.check}
                onPress={()=>{}}
                >
                  <Text>&#x2714;</Text>
              </TouchableOpacity>

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
      /> */}

      {/* modal de elemento */}
        <ModalConfirm 
        modalVisible={modalVisible}
        handleConfirmDelete={handleConfirmDelete}
        itemSelected={itemSelected}
        />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    marginTop: 30,
    padding: 20,
    borderColor: 'red',
    borderWidth: 1
  },
  title: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
    padding: 8,
    fontWeight: 'bold',
    marginBottom: 10,
  },



});
