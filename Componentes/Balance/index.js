import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 10,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99
  },
  item: {},
  itemTitle: {
    fontSize: 20,
    color: '#dadada'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  currencySymbol: {
    color: '#dadada',
    marginRight: 5
  },
  balance: {
    fontSize: 22,
    color: '#2ecc71'
  },
  gastos: {
    fontSize: 22,
    color: '#e74c3c'
  }
})