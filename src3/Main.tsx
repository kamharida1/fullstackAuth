import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useState } from 'react'

import List from './components/List'
import AddToList from './components/AddToList'
import Input from './components/Input'

export interface IState {
  people: {
    name: string
    age: string
    img: string
    note?: string
  }[]
}

const Main = () => {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: "35",
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team ",
    },
    {
      name: "Kobe Bryant",
      age: "42",
      img: "https://picsum.photos/id/1/200/300"
    }
  ])
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>People Invited to My Party</Text>
      </View>
      <View>
        <AddToList setPeople={setPeople} people={ people}/>
        <List people={people} />
      </View>
    </SafeAreaView>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8
  },
  titleText: {
    alignSelf: 'center',
    paddingVertical: 20,
    fontSize: 30,
    fontWeight: 'bold'
  }
})