import React, {memo} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Add from '../assets/svg/Add'
import Menu from '../assets/svg/Menu'
import Search from '../assets/svg/Search'

interface HeaderT {
  headerHeight: number
}

const styles = StyleSheet.create({
  subHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#1c1c1c',
  },
  conversation: {color:'white', fontSize: 16, fontWeight: 'bold'},
  searchText: {
    color: '#8B8B8B',
    fontSize: 17,
    lineHeight: 22,
    marginLeft: 8
  },
  searchBox: {
    flexDirection: 'row',
    paddingVertical: 8,
    backgroundColor: '#0F0F0F',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const Header = memo<HeaderT>(({ headerHeight }) => {
  const {subHeader, conversation,searchBox,searchText} =styles
  return (
    <>
      <View style={[subHeader, {height: headerHeight / 2}]}>
        <Menu />
        <Text style={conversation}>Conversations</Text>
        <Add />
      </View>
      <View style={[subHeader, {height: headerHeight / 2}]}>
        <View style={searchBox}>
          <Search />
          <Text style={searchText}>Search for messages or users</Text>
        </View>
      </View>
    </>
  )
})

export default Header;