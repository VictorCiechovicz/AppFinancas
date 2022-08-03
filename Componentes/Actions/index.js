import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import { AntDesign } from '@expo/vector-icons'

export default function Actions() {
  return (
    <ScrollView
      style={estilos.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={estilos.actionButton}>
        <View style={estilos.areaButton}>
          <AntDesign name="addfolder" size={26} color="#000" />
        </View>
        <Text style={estilos.labelButton}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.actionButton}>
        <View style={estilos.areaButton}>
          <AntDesign name="tagso" size={26} color="#000" />
        </View>
        <Text style={estilos.labelButton}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.actionButton}>
        <View style={estilos.areaButton}>
          <AntDesign name="creditcard" size={26} color="#000" />
        </View>
        <Text style={estilos.labelButton}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.actionButton}>
        <View style={estilos.areaButton}>
          <AntDesign name="barcode" size={26} color="#000" />
        </View>
        <Text style={estilos.labelButton}>Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.actionButton}>
        <View style={estilos.areaButton}>
          <AntDesign name="setting" size={26} color="#000" />
        </View>
        <Text style={estilos.labelButton}>Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14
  },
  actionButton: {
    alignItems: 'center',
    marginRight: 32
  },
  areaButton: {
    backgroundColor: '#ecf0f1',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60 / 2
  },
  labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
