import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PropsWithChildren } from 'react'
import React from 'react'
import Dice1 from '../assets/1.png'
import Dice2 from '../assets/2.png'
import Dice3 from '../assets/3.png'
import Dice4 from '../assets/4.png'
import Dice5 from '../assets/5.png'
import Dice6 from '../assets/6.png'

// implement dice using images
type DiceProps = PropsWithChildren<{
  ImageUrl: ImageSourcePropType
}>

const Dice = ({ ImageUrl }: DiceProps):JSX.Element => {
  return (
    <View style={styles.diceContainer}>
      <Image style={styles.diceImage} source={ImageUrl} />
    </View>
  )
}

export default function ImageDice() {
  // implement dice using styling
  const [diceImage, setDiceImage] = React.useState<ImageSourcePropType>(Dice1)
  const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]
  const roll = () => {
    let num = Math.floor(Math.random() * 6)
    setDiceImage(diceImages[num])
    }


  return (
    <>
      <Dice ImageUrl={diceImage} />
      <TouchableOpacity onPress={roll}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Roll</Text>
        </View>
      </TouchableOpacity>
    </>

  )
}

const styles = StyleSheet.create({
  diceContainer: {
    padding: 20,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: 'black',
    opacity: 0.7,
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textTransform: 'uppercase',
  }
})