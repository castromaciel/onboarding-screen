import { FC } from 'react'
import { StyleSheet, View, ViewToken } from 'react-native'
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue
} from 'react-native-reanimated'
import { CustomButton, Pagination, RenderItem } from '../../components'
import data from '../../data/data'

interface OnboardingProps { }

type OnViewableItemsChangeParams = {
  viewableItems: ViewToken []
}

type OnViewableItemsChange = (params: OnViewableItemsChangeParams) => void


const Onboarding: FC<OnboardingProps> = () => {
  const flatListRef = useAnimatedRef<any>();
  const scrollX = useSharedValue(0);  
  const flatListIndex = useSharedValue(0);

  const onViewableItemsChanged: OnViewableItemsChange = ({ viewableItems }) => {
    if (viewableItems[0]?.index !== null) {
      flatListIndex.value = viewableItems[0].index;
    }
  }

  const handleScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x
    }
  })

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        bounces={false}
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        onScroll={handleScroll}
        onViewableItemsChanged={onViewableItemsChanged}
        pagingEnabled
        renderItem={({ item, index }) => (
          <RenderItem item={item} index={index} scrollX={scrollX} />
        )}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator
        viewabilityConfig={{
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        }}
      />

      <View style={styles.bottomContainer}>
        <Pagination data={data} scrollX={scrollX} />
        <CustomButton
          dataLength={data?.length}
          flatListRef={flatListRef}
          flatListIndex={flatListIndex}
          scrollX={scrollX}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    marginHorizontal: 30,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default Onboarding
