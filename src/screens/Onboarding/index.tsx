import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import { RenderItem } from '../../components'
import data from '../../data/data'

interface OnboardingProps { }

const Onboarding: FC<OnboardingProps> = () => {
  const scrollX = useSharedValue(0);
  const handleScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x
    }
  })
  return (
    <View style={styles.container}>
      <Animated.FlatList
        bounces={false}
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        onScroll={handleScroll}
        pagingEnabled
        renderItem={({ item, index }) => (
          <RenderItem
            item={item}
            index={index}
            scrollX={scrollX} 
          /> )
        }
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Onboarding
