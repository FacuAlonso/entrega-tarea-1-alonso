// import React, { useState } from 'react'
// import { Pressable, StyleSheet, Text, View } from 'react-native'


// const modifyProfileModal = () => {
//   const [modalState, setModalState] = useState({ visible: false })

//   const aumentar = () => {
//     setContador(prev => ({ valor: prev.valor + 1 }))
//   }

//   return (
//     <View style = {styles.viewStyles}>
//       <Text>Contador ascendente: {contador.valor}</Text>

//       <View style={styles.buttonContainerStyle}>

//         <Button title="Incrementar" onPress={aumentar} />

//       </View>
      
//     </View>
//   )
// }


// const styles = StyleSheet.create({
//   viewStyles: {
//     backgroundColor: 'white',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: "100%",
//   },
//   textStyles: {
//     color: '#ffff',
//     fontSize: 22
//   },
//   buttonStyle: {
//     backgroundColor: 'rgba(32, 145, 236, 1)',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '4%'
//   },
//   buttonTextStyle:{
//     color:"white",
//     fontSize: 14,
//     fontWeight: 'bold'
//   },
//   buttonContainerStyle:{
//     flexDirection: 'row',
//     marginTop: '2%',
//     gap: '2%'
//   }
// })

// export default modifyProfileModal