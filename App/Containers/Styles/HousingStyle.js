import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: "#011936"
  },
  nav: {
    height: 56,
    elevation: 8,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0
  },
  VA: {
    padding: 15,
    height: (Dimensions.get('window').height - 80)/2,
    width: Dimensions.get('window').width,   
    backgroundColor: 'pink', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  nonVA: {
    padding: 15,
    height: (Dimensions.get('window').height - 80)/2,
    width: Dimensions.get('window').width, 
    backgroundColor: 'orange', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textElements: { 
    color:'white', 
    fontSize: 24
  },
  textStyleTitle: {
    textAlign: 'center', 
    color:'white', 
    fontSize: 30,
    backgroundColor: '#011936'
  },
  textStyleSub: {
    textAlign: 'left', 
    color:'white', 
    fontSize: 20
  },
})
