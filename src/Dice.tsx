import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export default function Dice() {
  // implement dice using styling
  const [dots, setDots] = React.useState([true, false, false, false])
  const roll = () => {
    let num = Math.floor(Math.random() * 6) + 1
    switch (num) {
      case 1:
        setDots([true, false, false, false])
        break
      case 2:
        setDots([false, true, false, false])
        break
      case 3:
        setDots([true, true, false, false])
        break
      case 4:
        setDots([false, true, false, true])
        break
      case 5:
        setDots([true, true, false, true])
        break
      case 6:
        setDots([false, true, true, true])
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (
    <>
      <View style={styles.dice}>
        <View style={styles.row}>
          <View style={[styles.dot, { opacity: dots[1] ? 1 : 0 }]} />
          <View style={[styles.dot, { opacity: dots[2] ? 1 : 0 }]} />
          <View style={[styles.dot, { opacity: dots[3] ? 1 : 0 }]} />
        </View>
        <View style={[styles.row, { justifyContent: 'center' }]}>
          <View style={[styles.dot, { opacity: dots[0] ? 1 : 0 }]} />
        </View>
        <View style={styles.row}>
          <View style={[styles.dot, { opacity: dots[3] ? 1 : 0 }]} />
          <View style={[styles.dot, { opacity: dots[2] ? 1 : 0 }]} />
          <View style={[styles.dot, { opacity: dots[1] ? 1 : 0 }]} />
        </View>
      </View>
      <TouchableOpacity onPress={roll}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Roll</Text>
        </View>
      </TouchableOpacity>
    </>

  )
}

const styles = StyleSheet.create({
  dice: {
    padding: 10,
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 200,
    height: 200,
    shadowColor: 'black',
    shadowOffset: {
      width: 4,
      height: 4
    },
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,

  },
  dot: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 20,
    elevation: -3,
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