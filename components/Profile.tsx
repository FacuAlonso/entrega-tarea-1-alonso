import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Pressable, StyleSheet, Text, View } from 'react-native'


const Profile = () => {
  const [profile, setProfile] = useState({ name: 'Juan', surname: 'Pérez' })

  const updateProfile = (newName: string, newSurname: string) => {
    setProfile(() => ({ name: newName, surname: newSurname }))
  }

  return (
    <View>
      <Text style={styles.textStyle}> Nombre: {profile.name}</Text>
      <Text style={styles.textStyle}> Apellido: {profile.surname}</Text>
      <Pressable style={styles.pressableStyle}>
        <FontAwesome name='edit' size={24} color="white" />
        <Text style={styles.pressableTextStyle}>Modificar</Text>
      </Pressable>
      
    </View>
  )
}

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
    gap: 10
  },
  pressableTextStyle:{
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  }
})

export default Profile