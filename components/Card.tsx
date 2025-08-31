import React, { useState } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

const Card = (props: { inputText: string }) => {
    const [cardState, setCardState] = useState(
        {
            backColor: 'grey', 
            textColor: 'white',
            text: props.inputText,
            isPressed: false
        })


    const changeColors = () => {
        setCardState((prev) => { 
            if (prev.isPressed) { 
                return {
                    backColor: 'grey',
                    textColor: 'white',
                    text: prev.text,
                    isPressed: false
                }
            } else {
                return {
                    backColor: '#1C3C47',
                    textColor: '#d4d4d4ff',
                    text: prev.text,
                    isPressed: true
                }
            }
        })
    }
    return(
        <Pressable 
            style={[styles.pressableStyle, {backgroundColor: cardState.backColor}]}
            onPress={changeColors}>

            <Text style={[styles.cardTextStyle, {color: cardState.textColor}]}>{cardState.text}</Text>

        </Pressable>
    )
}

const styles = StyleSheet.create({
    cardTextStyle: {
        fontSize: 15,
        fontFamily: 'Calibri',
        textAlign: 'center'
    },
    pressableStyle: {
        width: '70%',
        height: '15%',
        justifyContent: 'center',
    }
})

export default Card