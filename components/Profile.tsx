import React, { useState } from 'react'
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
        <Text style={styles.pressableTextStyle}>CAMBIAR NOMBRE</Text>
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
    margin: '5%',
    padding: '5%'
  },
  pressableTextStyle:{
    color: 'white',
    fontWeight: 'bold'
  }
})

export default Profile