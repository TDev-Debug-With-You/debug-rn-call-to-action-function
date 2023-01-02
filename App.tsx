/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white: "#1c3857",
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [started, setStarted] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleStart = (): boolean => {
    setStarted(!started)
    return started
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button handle={handleStart} />
          {
            (!started)?
            <Section title="Started">
              Feature Comming soon
            </Section>:
            <Section title="Stopped">
              Press the Button above to start
            </Section>
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  btn: {
    backgroundColor: '#159',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 50,
    paddingVertical: 5,
  },
  pressedBtn: {
    transform: [{scale: 1.02}],
    opacity: 0.85,
  },
  text: {
    color: '#ffd',
    fontSize: 25,
  },
});

export default App;


import {useState} from 'react';

const Button: React.FC<{
  handle: () => boolean
}> = (props) => {
  const [pressing, setPressing] = useState(false);

  const countDown = (): void => {
    console.log('cool');

    props.handle()
  };
  return (
    <Pressable
      onPress={() => countDown()}
      onPressIn={() => setPressing(true)}
      onPressOut={() => setPressing(false)}>
      <View style={[styles.btn, pressing && styles.pressedBtn]}>
        <Text style={styles.text}>
          {!props.handle ? 'Start CountDown' : 'Stop'}
        </Text>
      </View>
    </Pressable>
  );
};
