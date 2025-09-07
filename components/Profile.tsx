import React, { useState } from 'react'
import {Pressable, StyleSheet, Text, View, ViewBase } from 'react-native'


const Profile = () => {
  const [profile, setProfile] = useState({ name: 'Juan', surname: 'Pérez' })

  const updateProfile = (newName: string, newSurname: string) => {
    setProfile(() => ({ name: newName, surname: newSurname }))
  }

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}> Nombre: {profile.name}</Text>
      <Text style={styles.textStyle}> Apellido: {profile.surname}</Text>
      <Pressable style={styles.pressableStyle}>
        <Text style={styles.pressableTextStyle}>MODIFICAR NOMBRE</Text>
      </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    alignSelf: 'center',
  },
  pressableStyle: {
    backgroundColor: '#097200ff',
    borderRadius: '5%',
    padding: '5%'
  },
  pressableTextStyle:{
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  viewStyle:{
    gap: 25
  }
})

export default Profile