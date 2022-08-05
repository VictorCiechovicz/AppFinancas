import {StyleSheet} from 'react-native';

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
export default estilos;