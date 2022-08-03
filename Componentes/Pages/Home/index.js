import React from 'react'
import { View, Text, FlatList } from 'react-native'
import estilos from './estilos'

import Header from '../../Header/index'
import Balance from '../../Balance'
import Movements from '../../Movements'
import Actions from '../../Actions'

const movimentacao = [
  {
    id: 1,
    label: 'Boleto Luz',
    value: '390,00',
    date: '17/09/2022',
    type: 0 //despesa
  },
  {
    id: 2,
    label: 'Boleto Água',
    value: '400,00',
    date: '15/09/2022',
    type: 0 //despesa
  },
  {
    id: 3,
    label: 'Pix',
    value: '390,00',
    date: '18/09/2022',
    type: 1 //receita
  },
  {
    id: 4,
    label: 'Salário',
    value: '2.500,00',
    date: '18/09/2022',
    type: 1 //receita
  }
]

export default function Home() {
  return (
    <View style={estilos.container}>
      <Header name="Victor Ciechovicz" />
      <Balance saldo="15.000,00" gastos="-1.000,00" />
      <Actions />
      <Text style={estilos.title}>Últimas Movimentações</Text>
      <FlatList
        style={estilos.list}
        data={movimentacao}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  )
}
