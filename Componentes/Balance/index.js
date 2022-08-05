import React from 'react'
import { View, Text} from 'react-native'

import estilos from './estilos'

export default function Balance({ saldo, gastos }) {
  return (
    <View style={estilos.container}>
      <View style={estilos.item}>
        <Text style={estilos.itemTitle}>Saldo</Text>
        <View style={estilos.content}>
          <Text style={estilos.currencySymbol}>R$</Text>
          <Text style={estilos.balance}>{saldo}</Text>
        </View>
      </View>

      <View style={estilos.item}>
        <Text style={estilos.itemTitle}>Gastos</Text>
        <View style={estilos.content}>
          <Text style={estilos.currencySymbol}>R$</Text>
          <Text style={estilos.gastos}>{gastos}</Text>
        </View>
      </View>
    </View>
  )
}


