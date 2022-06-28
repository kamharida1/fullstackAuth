import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


interface IItem {
  name: string
  age: number
  img: string
  note?: string
}

const ListItem: React.FC<IItem> = ({name, age, img, note}) => {
  return (
    <View style={styles.mainCardView}>
      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.subCardView}>
          <Image source={{ uri: img }} style={styles.image } />
        </View>
        <View style={{ marginLeft: 12}}>
          <Text style={{
            fontSize: 16,
            color: '#454545',
            fontWeight: 'bold',
          }}>
            {name}
          </Text>
          <View style={{
            marginTop: 4,
            borderWidth: 0,
            width: '85%',
          }}
          >
            {note && <Text
              style={{ color: 'gray',fontSize: 14 }}
              numberOfLines={1}
              ellipsizeMode='tail'
            >
              {note}
            </Text>}
          </View>
        </View>
      </View>
      <View style={{
        height: 25,
        width: 25,
        borderWidth: 0,
        borderRadius: 50,
        backgroundColor: '#D01110',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{color: 'white'}}>{ age }</Text>
      </View>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  mainCardView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 90,
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
    shadowOpacity: 0.25,
    //overflow: 'hidden'
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 50
  },
  subCardView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#eee',
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center'
  }
})