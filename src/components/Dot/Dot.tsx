import { FC } from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated'

interface DotProps {
  index: number
  scrollX: SharedValue<number>
}

const Dot: FC<DotProps> = ({ index, scrollX }) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions()

  const animatedDotStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * SCREEN_WIDTH,
      index * SCREEN_WIDTH,
      (index + 1) * SCREEN_WIDTH,
    ]

    const widthAnimation = interpolate(
      scrollX.value,
      inputRange,
      [10, 20, 10],
      Extrapolate.CLAMP
    )

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    )

    return {
      width: widthAnimation,
      opacity
    }
  })

  const animatedColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollX.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
      ['#005b4f', '#1e2169', '#f15937']
    )

    return {
      backgroundColor
    }
  })

  return (
    <Animated.View style={[styles.dot, animatedDotStyle, animatedColorStyle]} />
  )
}

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  }
})

export default Dot
