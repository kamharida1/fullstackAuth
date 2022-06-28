import React,{memo} from 'react'
import { Text, View, Dimensions, Pressable, StyleSheet } from 'react-native'



const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    backgroundColor: '#1c1c1c',
    top: 16,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
  },
  subHeader: {
    width: '100%',
    paddingHorizontal: 10,
  },
  listItem: {
    flexDirection: 'row',
    width: '99%',
    marginLeft: 10,
    marginTop: 8,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  contactIcon: {
    height: 60,
    width: 60,
    borderRadius: 999
  },
  contactName: {
    marginLeft: 15,
    fontSize: 16,
    color: 'white',
  },
  messageContainer: {
    marginRight: 20,
    paddingHorizontal: 15,
    width: width * 0.8,

  },
  messageStyle: {
    fontSize: 14,
    color: '#979799'
  }
})

const ListItem = ((props: any) => {
  const { item } = props
  const { name, color, message } = item;
  const { listItem, contactIcon, contactName, container, messageStyle, messageContainer, header, subHeader } = styles

  return (
    <Pressable style={listItem}>
      <View style={[contactIcon, { backgroundColor: color }]} />
      <View>
        <Text style={contactName}>{name}</Text>
        <View style={messageContainer}>
          <Text style={messageStyle} numberOfLines={2} ellipsizeMode={'tail'}>
            {message}
          </Text>
        </View>
      </View>
    </Pressable>
  )
});

export default ListItem
