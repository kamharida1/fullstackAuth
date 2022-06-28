import { Image, StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { IState as Props } from '../Main'
import { moderateScale } from 'react-native-size-matters'
import ListItem from './ListItem'

interface IProps {
  people: Props["people"]
}

export interface IItem {
  item: {
    name: string
    age: number
    img: string
    note?: string
  }
}

const List: React.FC<IProps> = ({ people }) => {
  
  const renderItem = ({item}: IItem ) => (
    <ListItem name={item.name} age={item.age}
      img={item.img} note={item.note}
    />
  )
  return (
    <View style={{}}>
      <FlatList
        data={people}
        keyExtractor={item => item.name}
        ListHeaderComponent={
          <View style={{ width: '100%', height: moderateScale(8) }} />
        }
        ListFooterComponent={
          <View style={{width: '100%', height: 28}} />
        }
        renderItem={renderItem}
      />
    </View>
  )

  // const renderList = (): JSX.Element[] => {
  //   return people.map(person => {
  //     return (
  //       <View key={person.name} style={styles.container}>
  //         <View>
  //           <Image source={{ uri: person.img }} style={ styles.imageStyle }/>
  //         </View>
  //         <View>
  //           <Text>{ person.name}</Text>
  //           <Text>{`Age is ${person.age}`}</Text>
  //           <Text>{ person.note}</Text>
  //         </View>
  //       </View>
  //     )
  //   })
  // }
  // return <>{ renderList() }</>
 
}

export default List

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
    //borderWidth: StyleSheet.hairlineWidth,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.2,
    padding: 5
  },
  imageStyle: {
    width: 100,
    height: 100,
    resizeMode: 'cover'
  },
})