import { Animated, View, SafeAreaView, StyleSheet,FlatList } from 'react-native'
import React, {useRef} from 'react'
import { useTheme } from '@react-navigation/native'; 

import Header from '../src2/components/Header'
import ListItem from '../src2/components/ListItem';
import { generateData } from './data'
import { StatusBar } from 'expo-status-bar';
import { getCloser } from './utils';

const { diffClamp } = Animated;
const headerHeight = 58 * 2

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    backgroundColor: '#1c1c1c',
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
  },
  subHeader: {
    height: headerHeight / 2,
    width: '100%',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
});

const Main = () => {
  const { header, subHeader, container} = styles
  const colors = useTheme().colors;
  // console.warn(typeof useTheme)

  const data = generateData(50);

  const ref = useRef(null);

  const scrollY = useRef(new Animated.Value(0));

  const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight)

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -(headerHeight / 2)],
  });

  const translateYNumber = useRef();

  translateY.addListener(({ value }) => {
    translateYNumber.current = value;
  })

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: { y: scrollY.current },
        }
      },
    ],
    {
      useNativeDriver: true
    }
  );

  const handleSnap = ({ nativeEvent }) => {
    const offsetY = nativeEvent.contentOffset.y;
    if (
      !(
        translateYNumber.current === 0 ||
        translateYNumber.current === -headerHeight / 2
      )
    ) {
      if (ref.current) {
        ref.current.scrollToOffset({
          offset:
            getCloser(translateYNumber.current, -headerHeight / 2, 0) ===
            -headerHeight / 2
              ? offsetY + headerHeight / 2
              : offsetY - headerHeight / 2,
        });
      }
    }
  }



  return (
    <SafeAreaView style={container}>
      <StatusBar backgroundColor='#1c1c1c' style='light' />
      <Animated.View style={[header, {transform: [{translateY}]}]}>
        <Header {...{ headerHeight }} />
      </Animated.View>
      <Animated.FlatList
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: headerHeight }}
        onScroll={handleScroll}
        ref={ref}
        onMomentumScrollEnd={handleSnap}
        data={data}
        renderItem={ListItem}
        keyExtractor={(item, index) => `list-item-${index}-${item.color}`}
      />
    </SafeAreaView>
    
  )
}

export default Main;