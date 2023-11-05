import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { SharedValue } from 'react-native-reanimated'
import { OnboardingData } from '../../interfaces'
import Dot from '../Dot/Dot'

interface PaginationProps {
  data: OnboardingData[]
  scrollX: SharedValue<number>
}

const Pagination: FC<PaginationProps> = ({
  data, scrollX
}) => {
  return (
    <View style={styles.paginationContainer}>
      { 
        data.map((datum, index) => (
          <Dot key={datum.id} index={index} scrollX={scrollX} />
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Pagination
