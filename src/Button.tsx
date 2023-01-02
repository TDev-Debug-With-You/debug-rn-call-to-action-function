import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React, {useState} from 'react'

const Button: React.FC = () => {
    const [launched, setLaunched] = useState(false);
    const [pressing, setPressing] = useState(false);
    
    const countDown = (): boolean => {
        console.log("cool");
        
        setLaunched(!launched)
        return launched
    }
  return (
    <Pressable
      onPress={() => countDown()}
      onPressIn={() => setPressing(true)}
      onPressOut={() => setPressing(false)}
      >
      <View style={[styles.btn, pressing && styles.pressedBtn]}>
        <Text style={styles.text}>
          {!launched ? 'Start CountDown' : 'Stop'}
        </Text>
      </View>
    </Pressable>
  );
}

export default Button

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#159',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 50,
    paddingVertical: 5
  },
  pressedBtn: {
    transform: [{scale: 1.02}],
    opacity: 0.85
  },
  text: {
    color: '#ffd',
    fontSize: 25,
  },
});