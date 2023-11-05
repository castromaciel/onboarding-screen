import LottieView from 'lottie-react-native'
import { FC } from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import Animated, { Extrapolate, SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { OnboardingData } from '../../interfaces'

interface RenderItemProps {
  item: OnboardingData
  index: number
  scrollX: SharedValue<number>
}

const RenderItem: FC<RenderItemProps> = ({
  index, item, scrollX
}) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions()

  const lottieAnimationStyle = useAnimatedStyle(() => {
    const translateYAnimation = interpolate(
      scrollX.value,
      [
        (index - 1 ) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1 ) * SCREEN_WIDTH,
      ],
      [200, 0, 0],
      Extrapolate.CLAMP
    )

    return {
      transform: [{ translateY: translateYAnimation}]
    }
  })

  const circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [
        (index - 1 ) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1 ) * SCREEN_WIDTH,
      ],
      [1, 4, 4],
      Extrapolate.CLAMP
    )

    return {
      transform: [{ scale }]
    }
  })

  return (
    <View style={[
      styles.itemContainer,
      { width: SCREEN_WIDTH }
    ]}>
      <View id='CricleContainer' style={styles.circleContainer}>
        <Animated.View style={[
          {
            width: SCREEN_WIDTH,
            height: SCREEN_WIDTH,
            backgroundColor: item.backgroundColor,
            borderRadius: SCREEN_WIDTH / 2,
          },
          circleAnimation,
        ]} />
      </View>
      <Animated.View id='LottieContainer' style={lottieAnimationStyle}>
        <LottieView
          source={item.animation}
          style={{
            width: SCREEN_WIDTH * 0.9,
            height: SCREEN_WIDTH * 0.9
          }}
          autoPlay
          loop
        />
      </Animated.View>
      <Text style={[
        styles.itemText,
        { color: item.textColor }
      ]}>
        {item.text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 120,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 10,
    marginHorizontal: 20,
  },
  circleContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default RenderItem
