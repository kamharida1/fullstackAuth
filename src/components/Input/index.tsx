import { Text, StyleSheet, Platform, TextInput } from 'react-native'
import React, { memo } from 'react'
import { useTheme } from '@react-navigation/native'
import {dimGray, KLMN, primary, secondary, W} from '../../constants'
import { ScaledSheet } from 'react-native-size-matters'

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 14,
    alignSelf: 'center',
    width: W - 30,
    borderBottomWidth: 2
  },
  errorStyle: {
    fontSize: 14,
    color: 'red',
    paddingTop: 10,
    left: 5
  }
})

interface InputT {
  name: string
  value: string
  placeholder?: string
  errors: object
  touched: object
  onChangeText?: (e: string) => void
  onBlur?: () => void
  multiline?: boolean
  numberOfLines?: number
  keyboardType?: 
  | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
  | 'visible-password'
  secureTextEntry?: boolean
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
}

const Input = memo<InputT>(
  ({
    name,
    value,
    errors,
    placeholder= 'your Name',
    onChangeText,
    onBlur,
    touched,
    secureTextEntry,
    keyboardType,
    multiline,
    numberOfLines,
    autoCapitalize
  }) => {
    const { inputStyle, errorStyle } = styles
    
    const { dark } = useTheme()

    const input = [
      inputStyle,
      {
        fontFamily: KLMN,
        color: dark ? primary : secondary,
        borderBottomColor: dark ? primary : secondary,
        fontSize: Platform.OS === 'ios' ? '15@s' : '15@s'
      }
    ]

    const placeholderStyle = [
      inputStyle,
      {
        fontFamily: KLMN,
        color: dimGray,
        borderBottomColor: dark ? primary : secondary,
        fontSize: Platform.OS === 'ios' ? '15@s' : '15@s'
      }
    ]

  return (
    <>
      <TextInput
        style={ScaledSheet.create(placeholderStyle || inputStyle)}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor={dimGray}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
      {/* {touched[name] && errors[name] ? (
        <Text style={errorStyle}>{ errors[name]}</Text>
      ) : (
          <Text style={errorStyle}>{'  '}</Text>
      )} */}
    </>
  )
  }
)

export { Input }