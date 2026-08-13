import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { AtAvatar, AtButton } from '@htyf-mp/taro-ui'
import { Button2 } from '@/components/Button'
import './index.less'


export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>红糖云服</Text>
      <Button2 />
      <AtButton>
        <Text>按钮</Text>
      </AtButton>
    </View>
  )
}
