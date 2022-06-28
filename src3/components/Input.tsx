import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

// interface Props {
//   field: {
//     name: string
//     onBlur: () => void
//     onChange: () => void
//     value: string
//   }
//   form: {
//     errors: object
//     touched: boolean
//     setFieldTouched: ()=> void
//   }
// }

const Input = (props: any) => {
  const {
    placeholder,
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        {...inputProps}
      />
      {hasError && <Text style={{color: 'red'}}>{errors[name]}</Text>}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    // height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    borderRadius: 15,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: .2,
  },
  inputStyle: {
    height: 50,
    width: '100%',
  },
})