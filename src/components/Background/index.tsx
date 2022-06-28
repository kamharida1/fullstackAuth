import { View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import React, { memo } from 'react'
import { W } from '../../constants'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  img: {
    width: W,
    height: W / 1.8,
  }
})

interface BackgroundT {
  uri?: string
  onPress?: () => void
  children?: JSX.Element | JSX.Element[]
}

const Background = memo<BackgroundT>(({ children, uri= 'https://images.unsplash.com/photo-1595935736128-db1f0a261263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlbGV2aXNpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60', onPress }) => {
  const {container, img} = styles
  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <ImageBackground resizeMode= "cover" style={img} source={uri ? { uri } : require('../../assets/icon.png')}>
        {children}
      </ImageBackground>
    </TouchableOpacity>
  )
})

export { Background }