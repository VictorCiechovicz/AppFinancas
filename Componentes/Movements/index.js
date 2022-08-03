import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import estilos from './estilos'

export default function Movements({ data }) {
  const [showValue, setShowValue] = useState(false)

  return (
    <TouchableOpacity
      style={estilos.movimentacao}
      onPress={() => setShowValue(!showValue)}
    >
      <View style={estilos.content}>
        <Text style={estilos.date}>{data.date}</Text>
        <Text style={estilos.label}>{data.label}</Text>
      </View>

      {showValue ? (
        <Text style={data.type === 1 ? estilos.value : estilos.despesas}>
          {data.type === 1 ? `R$ ${data.value}` : `R$ - ${data.value}`}
        </Text>
      ) : (
        <View style={estilos.skeleton}></View>
      )}
    </TouchableOpacity>
  )
}
