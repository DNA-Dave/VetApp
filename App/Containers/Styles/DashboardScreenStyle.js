import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#011936",
    justifyContent: 'center',
    alignItems: 'center',
  },

  career: {
    padding: 15,
    flex:1, 
    width: Dimensions.get('window').width,  
    backgroundColor: '#D81E5B', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  house: {
    padding: 15,
    flex:1, 
    width: Dimensions.get('window').width,  
    backgroundColor: '#384c6b', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  social: {
    padding: 15,
    flex:1, 
    width: Dimensions.get('window').width,  
    backgroundColor: '#FFFD98', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  health: {
    padding: 15,
    flex:1, 
    width: Dimensions.get('window').width,  
    backgroundColor: '#B9E3C6', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  touchLogout: {
    padding: 5,
    flex:.5, 
    width: Dimensions.get('window').width,  
    backgroundColor: 'red', 
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyleTitle: {
    textAlign: 'center', 
    color:'white', 
    fontSize: 35
  },

  textElements: { 
    color:'#000000', 
    fontSize: 24
  },

  nav: {
    height: 56,
    elevation: 8,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0
  },

  filler: {
    flex:.5,
    backgroundColor: "#ff0000",
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
