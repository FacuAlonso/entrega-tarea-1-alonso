import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const Profile = () => {
  const [profile, setProfile] = useState({ name: 'Juan', surname: 'Pérez' });
  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState(profile.name);
  const [newSurname, setNewSurname] = useState(profile.surname);

  const updateProfile = (newName: string, newSurname: string) => {
    setProfile(() => ({ name: newName, surname: newSurname }));
  };

  const handleSave = () => {
    updateProfile(newName, newSurname);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setNewName(profile.name);
    setNewSurname(profile.surname)
  }

  return (
    <View>
      <Text style={styles.textStyle}> Nombre: {profile.name}</Text>
      <Text style={styles.textStyle}> Apellido: {profile.surname}</Text>

      <Pressable style={styles.pressableStyle} onPress={() => setModalVisible(true)}>
        <FontAwesome name="edit" size={24} color="white" />
        <Text style={styles.pressableTextStyle}>Modificar</Text>
      </Pressable>

      <Modal
        animationType={'fade'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalFullScreenBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Modificar Perfil</Text>

            <TextInput
              style={styles.inputStyle}
              placeholder="Nombre"
              value={newName}
              onChangeText={setNewName}/>
            
            <TextInput
              style={styles.inputStyle}
              placeholder="Apellido"
              value={newSurname}
              onChangeText={setNewSurname}/>

            <View style={styles.modalControls}>
              <Pressable style={[styles.modalButton, { backgroundColor: '#b4b4b4ff' }]} onPress={handleCancel}>
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </Pressable>
              <Pressable style={[styles.modalButton, { backgroundColor: '#1b0075ff' }]} onPress={handleSave}>
                <Text style={styles.modalButtonText}>Guardar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    alignSelf: 'center',
  },
  pressableStyle: {
    backgroundColor: '#1b0075ff',
    borderRadius: 10,
    padding: '4%',
    marginTop: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  pressableTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  modalFullScreenBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000a5',
  },
  modalContainer: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#190052a4',
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    marginVertical: 5,
  },
  modalControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalButton: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
