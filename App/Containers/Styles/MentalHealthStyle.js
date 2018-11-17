import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: "blue"
  },
  scroll: {

  },
  textElements: { 
    color:'white', 
    fontSize: 24
  },
  ptsd: {
    padding: 15,
    height: (Dimensions.get('window').height - 40)/6,
    width: Dimensions.get('window').width,   
    backgroundColor: 'pink', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  insomnia: {
    padding: 15,
    height: (Dimensions.get('window').height - 40)/6,
    width: Dimensions.get('window').width, 
    backgroundColor: 'orange', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  therapy: {
    padding: 15,
    height: (Dimensions.get('window').height - 40)/6,
    width: Dimensions.get('window').width, 
    backgroundColor: 'green', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mindfulness: {
    padding: 15,
    height: (Dimensions.get('window').height - 40)/6,
    width: Dimensions.get('window').width, 
    backgroundColor: 'skyblue', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sus: {
    padding: 15,
    height: (Dimensions.get('window').height - 40)/6,
    width: Dimensions.get('window').width, 
    backgroundColor: 'purple', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  general: {
    padding: 15,
    height: (Dimensions.get('window').height - 40)/6,
    width: Dimensions.get('window').width, 
    backgroundColor: 'black', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav: {
    height: 56,
    elevation: 8,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0
  },
  textStyleTitle: {
    textAlign: 'center', 
    color:'white', 
    fontSize: 35,
    backgroundColor: 'blue'
  },
})
