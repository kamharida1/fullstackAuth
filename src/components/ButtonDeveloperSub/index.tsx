import { View, Text, StyleSheet, StyleProp, TextStyle, ViewStyle, TouchableOpacity, Platform } from 'react-native'
import React, { memo } from 'react'
import { Avatar } from '../Avatar'
import { Txt } from '../Txt'
import { ButtonRate } from '../ButtonRate'
import { W, primary, secondary } from '../../constants'

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'row',
    // backgroundColor: 'white',
    // height: 90,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // paddingLeft: 16,
    // paddingRight: 14,
    // paddingVertical: 20,
    // marginTop: 6,
    // borderRadius: 15,
    // marginBottom: 6,
    // marginLeft: 3,
    // marginRight: 3,
    // elevation: 8,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 0 },
    // shadowRadius: 8,
    // shadowOpacity: 0.25,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  h: {
    width: W - 200,
    marginTop: Platform.OS === 'ios' ? 8 : 10,
    marginLeft: 15,
    marginRight: 5
  },
  rateStyle: {
    marginTop: Platform.OS === 'ios' ? 3 : 0,
    //right: 10
  }
})

interface ButtonDeveloperSubT{
  title: string
  uri?: string
  rate?: string
  textStyle?: StyleProp<TextStyle> 
  viewStyle?: StyleProp<ViewStyle>
  onPress?: () => void
}


const ButtonDeveloperSub = memo<ButtonDeveloperSubT>(({ title, uri, rate, textStyle, viewStyle, onPress }) => {
  const { container, h, rateStyle } = styles
  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
      <Avatar uri={ uri } size="small" />
      <Txt h7 title={title} textStyle={h} numberOfLines={1} ellipsizeMode="tail" />
      <ButtonRate title={rate} viewStyle={rateStyle} />
    </TouchableOpacity>
  )
})

export { ButtonDeveloperSub }