import React, { Component } from 'react'
import { ScrollView, Text, View , Button, TouchableOpacity, Dimensions, AppRegistry,
  StyleSheet, FlatList, Image} from 'react-native'
import { connect } from 'react-redux'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DashboardScreenStyle'
import Swiper from 'react-native-swiper'


import FlatListItem from '../Components/FlatListItem.js'





class DashboardScreen extends Component {


  render () {
    return (
      <View style ={styles.container}>
          <Text style = {styles.textStyleTitle}>
            Dashboard
          </Text>
          <TouchableOpacity style={styles.health}
            onPress={() => this.props.navigation.navigate('Health')}
          >
            
            <Text style = {styles.textElements}>
              Health
            </Text>
          
          </TouchableOpacity>

          <TouchableOpacity style={styles.house}
            onPress={() => this.props.navigation.navigate('Housing')}
          >
          
            <Text style = {styles.textElements}>
              Housing
            </Text>
          
          </TouchableOpacity>

          <TouchableOpacity style={styles.career}
            onPress={() => this.props.navigation.navigate('CareerCenter')}
          >
            <Text style = {styles.textElements}>
              Occupation
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.social}
            onPress={() => this.props.navigation.navigate('Social')}
          >
            
            <Text style = {styles.textElements}>
              Social
            </Text>
          
          </TouchableOpacity>
          <View style={styles.filler}>
          </View>


        <BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={styles.nav}
        shifting="false"
        >
          <Tab
            barBackgroundColor="#000000"
            icon={<Icon size={24} color="#000000" name="menu" />}
          />
          <Tab
            onPress={() => this.props.navigation.navigate('DashboardScreen')}
            barBackgroundColor="#37474F"
            label="Main Menu"
            icon={<Icon size={24} color="white" name="menu" />}
          />
          <Tab
            barBackgroundColor="#000000"
            icon={<Icon size={24} color="#000000" name="menu" />}
          />
          <Tab
           onPress={() => this.props.navigation.navigate('LoginScreen')}
            barBackgroundColor="#5D4037"
            label="Logout"
            icon={<Icon size={24} color="white" name="power" />}
          />
          <Tab
            barBackgroundColor="#000000"
            icon={<Icon size={24} color="#000000" name="menu" />}
          />
        </BottomNavigation>
      
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen)
