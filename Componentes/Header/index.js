import React from 'react'
import {
  View,
  Text,
  StatusBar,
   TouchableOpacity
} from 'react-native'

import { Feather } from '@expo/vector-icons'

import estilos from './estilos'


const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64

export default function Header({ name }) {
  return (
    <View style={estilos.container}>
     
        <Text style={estilos.username}>{name}</Text>
        <TouchableOpacity style={estilos.buttonUser}>
          <Feather name="user" size={27} color="#fff" />
        </TouchableOpacity>
      
    </View>
  )
}


