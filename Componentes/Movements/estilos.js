import {StyleSheet} from 'react-native'

const estilos =StyleSheet.create({
  movimentacao: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 24,
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dadada'
  },
  content: {
    marginBottom: 8,
    marginTop: 2
  },
  date: {
    color: '#dadada',
    fontWeight: 'bold'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16
  },
  value: {
    fontSize: 16,
    color: '#2ecc71',
    fontWeight: 'bold'
  },
  despesas: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: 'bold'
  },
  skeleton: {
    width: 100,
    height: 15,
    backgroundColor: '#dadada',
    borderRadius: 10
  }
})

export default estilos