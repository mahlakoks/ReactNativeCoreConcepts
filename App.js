import { Greet } from './components/Greet'
//npx create-expo-app@latest CoreComponents --template blank@sdk-49
//npx create-expo-app@latest RNLayout --template blank

import React from 'react'
import { View, Text } from 'react-native'

export default function App() {
  return (
    <View style={{flex:1,padding:60}}>
      <Text>Hello</Text>
    </View>
  )
}