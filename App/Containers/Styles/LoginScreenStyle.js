import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#011936"
  },
  viewSettings: {
    flex: 1,
    padding: 10
  },
  welcomeText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 15,
  },
  createAccount: {
    fontSize: 20, 
    textAlign: 'center', 
    color: 'rgba(255, 255, 255, 1)', 
    marginTop: 15,
  },
  button: {
    marginTop:20,
    marginBottom:20,
    padding: 5, 
    backgroundColor: "white",
  },
  text: {
    fontSize: 24,
    textAlign: 'left',
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 25,
    marginBottom: 15
  },
  placeholder :{
    flex:1
  }
})


