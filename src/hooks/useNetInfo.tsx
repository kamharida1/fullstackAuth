import React, { useState, useEffect } from 'react'
import { onChange } from 'react-native-reanimated'
import NetInfo from "@react-native-community/netinfo";


function useNetInfo() {
  //useState hook for setting netInfo
  const [netInfo, setNetInfo] = useState(false)

  // it calls when the connection changes
  const onChange = (newState: any) => {
    setNetInfo(newState)
  }

  //useEffect hook calls only once like componentDidMount()
  useEffect(() => {
    NetInfo.fetch().then(state => {
      setNetInfo(true)
    })
  },[])

}