import { FC } from 'react'
import { FlatList, StyleSheet, TouchableWithoutFeedback, useWindowDimensions } from 'react-native'
import Animated, { AnimatedRef, SharedValue, interpolateColor, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'
import { OnboardingData } from '../../interfaces'

interface CustomButtonProps {
  dataLength: number
  flatListRef: AnimatedRef<FlatList<OnboardingData>>
  flatListIndex: SharedValue<number>
  scrollX: SharedValue<number>
}

const CustomButton: FC<CustomButtonProps> = ({
  dataLength, flatListIndex, flatListRef, scrollX
}) => {
  const buttonImage = require('../../assets/images/ArrowIcon.png')

  const { width: SCREEN_WIDTH } = useWindowDimensions()
  
  const handlePress = () => {
    if (flatListIndex.value < dataLength -1) {
      flatListRef.current?.scrollToIndex({
        index: flatListIndex.value + 1,
      })
    } else {
      console.log('Hola guguchi')
    }
  }

  const arrowAnimationStyle = useAnimatedStyle(() => {

    return {
      width: 30,
      height: 30,
      opacity: flatListIndex.value == dataLength -1
        ? withTiming(0)
        : withTiming(1),
      transform: [{
        translateX: flatListIndex.value == dataLength -1
        ? withTiming(100)
        : withTiming(0)
      }]
    }
  })

  const buttonAnimationStyle = useAnimatedStyle(() => {

    return {
      width: flatListIndex.value === dataLength - 1
        ? withSpring(140)
        : withSpring(60),
      height: 60
    }
  })

  const textAnimationStyle = useAnimatedStyle(() => {

    return {
      opacity: flatListIndex.value == dataLength -1
        ? withTiming(1)
        : withTiming(0),
      transform: [{
        translateX: flatListIndex.value == dataLength -1
        ? withTiming(0)
        : withTiming(-100)
      }]
    }
  })

  const animatedColor = useAnimatedStyle(()=> {
    const backgroundColor = interpolateColor(
      scrollX.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
      ['#005b4f', '#1e2169', '#f15937'],

    )
    return {
      backgroundColor
    }
  })

  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
    >
      <Animated.View style={[
        animatedColor,
        buttonAnimationStyle,
        styles.container,
      ]}>
        <Animated.Text style={[styles.textButton, textAnimationStyle]}>Get Started!</Animated.Text>
        <Animated.Image source={buttonImage} style={[arrowAnimationStyle, styles.arrow]}/>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: 60,
    height: 60

  },
  arrow: {
    position: 'absolute',
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    position: 'absolute'
  }
})

export default CustomButton
