import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#3498db"
  },
  input: {
    marginBottom: 35,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#FFF',
    paddingHorizontal: 10
  },
  text: {
    fontSize: 24,
    textAlign: 'left',
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 25,
    marginBottom: 15
  },
  button: {
    padding: 5, 
    backgroundColor: "#444"
  },
  placeholder :{
    flex:1
  },
  placeholder2 :{
    marginTop:15
  }
})
