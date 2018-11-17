import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
   flex: 8,
   paddingTop: 22,
   backgroundColor: '#011936'
  },
  nav: {
    height: 56,
    elevation: 8,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0
  },
  textElements: { 
    color:'white', 
    fontSize: 24
  },
  transition: {
    padding: 15,
    height: (Dimensions.get('window').height - 130)/5, 
    width: Dimensions.get('window').width,
    backgroundColor: 'skyblue', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  resume: {
    padding: 15,
    height: (Dimensions.get('window').height - 130)/5, 
    width: Dimensions.get('window').width, 
    backgroundColor: 'green', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  job: {
    padding: 15,
    height: (Dimensions.get('window').height - 130)/5, 
    width: Dimensions.get('window').width, 
    backgroundColor: 'pink', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  volunteer: {
    padding: 15,
    height: (Dimensions.get('window').height - 130)/5, 
    width: Dimensions.get('window').width,
    backgroundColor: 'orange', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mentor: {
    padding: 15,
    height: (Dimensions.get('window').height - 120)/4, 
    width: Dimensions.get('window').width, 
    backgroundColor: 'purple', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyleTitle: {
    textAlign: 'center', 
    color:'white', 
    fontSize: 30
  },
  textStyleSub: {
    textAlign: 'left', 
    color:'white', 
    fontSize: 20
  },
})
