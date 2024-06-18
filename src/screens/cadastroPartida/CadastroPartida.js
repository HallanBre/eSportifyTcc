import React from 'react'
import {Text,SafeAreaView,StyleSheet, TextInput} from 'react-native'

export default props => {
  return (
    <SafeAreaView style={style.container}>
      <TextInput ></TextInput>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    
  },

})