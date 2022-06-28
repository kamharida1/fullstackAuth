import { View, StyleProp, ViewStyle, Text, StyleSheet } from 'react-native'
import React, { memo } from 'react'
import { primary, secondary} from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // flexDirection: 'row',
    // height: 90,
    //justifyContent: 'flex-start',
    paddingLeft: 18,
    paddingRight: 22,
    paddingVertical: 15,
    marginTop: 6,
    borderRadius: 15,
    marginBottom: 6,
    marginLeft: 3,
    marginRight: 3,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    
}
})

interface CardBorder1T {
  children?: JSX.Element | JSX.Element[]
  viewStyle?: StyleProp<ViewStyle>
  border?: boolean
}

const CardBorder1 = memo<CardBorder1T>(({ children, viewStyle, border }) => {
  const {container} = styles
  const borderColor = border ? 'transparent' : primary
  return (
    <View style={[container, viewStyle, { borderColor }]}>
      {children}
    </View>
  )
})

export { CardBorder1 }