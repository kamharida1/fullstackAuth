import { Button, StyleSheet, Text, View,  } from 'react-native'
import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import { IState as Props } from '../Main';


interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
  people: Props["people"]
}

const AddToList: React.FC<IProps> = ({setPeople, people}) => {

  const handleClick = (values: { name: string;
    age: string; img: string;
    note: string
  }) => {

    const { name, age, img, note } = values

    if (!values) return
    
    setPeople([
      ...people,
      {
        name,
        age,
        img,
        note
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add to List</Text>
      <Formik
        initialValues={{ name: '', age: '', img: '', note: '' }}
        onSubmit={(values, { resetForm }) => { handleClick(values); resetForm() }}
      >
        {({ 
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <Field component={ Input } name='name' placeholder="Name" />
            <Field
              component={Input}
              name='age'
              placeholder="Age"
              keyboardType="numeric"
            />
            <Field component={ Input } name='img' placeholder="Image" />
            <Field component={Input} name='note' placeholder="Notes" />
            <Button onPress = {handleSubmit} title=" Submit"/>
          </View>
        )}
      </Formik>
        
    </View>
  )
}

export default AddToList

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ddd',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 4,
    borderRadius: 20
  }, 
  text: {
    marginLeft: 20,
    padding: 10,
    fontWeight: '500',
    fontSize: 20
  }
})