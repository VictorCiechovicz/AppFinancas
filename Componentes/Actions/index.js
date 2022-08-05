import React from 'react'
import {
  View,
  Text,
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

