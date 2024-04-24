import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dice from './Dice'
import ImageDice from './ImageDice'

export default function App() {
  
  return (
    <>
      <StatusBar backgroundColor={'burlywood'} />
      <View style={styles.container}>
        <Dice />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'burlywood'
  }
})