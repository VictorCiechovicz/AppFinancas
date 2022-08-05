import React from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64

export default function Header({ name }) {
  return (
    <View style={estilos.container}>
      <View style={estilos.content}>
        <Text style={estilos.username}>{name}</Text>
      </View>

      <TouchableOpacity style={estilos.buttonUser}>
        <Feather name="user" size={27} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#8000ff',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  username: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 44 / 2
  }
})
