import React, { Component } from 'react'
import { View, TouchableOpacity, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MentalHealthStyle'

class MentalHealth extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <View style={styles.container}>
      <Text style = {styles.textStyleTitle}>
            Mental Health
          </Text>
      <ScrollView style={styles.scroll}>
        <TouchableOpacity style={styles.insomnia}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              Insomnia
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.ptsd}
            onPress={() => this.props.navigation.navigate('PTSD')}
          >
            
            <Text style = {styles.textElements}>
              PTSD
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.therapy}
            onPress={() => this.props.navigation.navigate('Therapy')}
          >
            
            <Text style = {styles.textElements}>
              Therapy
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.mindfulness}
            onPress={() => this.props.navigation.navigate('Mindfulness')}
          >
            
            <Text style = {styles.textElements}>
              Mindfulness
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.sus}
            onPress={() => this.props.navigation.navigate('Substance')}
          >
            
            <Text style = {styles.textElements}>
              Substance Abuse
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.general}
            onPress={() => this.props.navigation.navigate('General')}
          >
            
            <Text style = {styles.textElements}>
              General
            </Text>
          
        </TouchableOpacity>


      </ScrollView>
      <BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={styles.nav}
        shifting="false"
        >
          <Tab
            barBackgroundColor="skyblue"
            icon={<Icon size={24} color="skyblue" name="blank" />}
          />
          <Tab
            onPress={() => this.props.navigation.navigate('DashboardScreen')}
            barBackgroundColor="#37474F"
            label="Main Menu"
            icon={<Icon size={24} color="white" name="menu" />}
          />
          <Tab
            barBackgroundColor="skyblue"
            icon={<Icon size={24} color="skyblue" name="blank" />}
          />
          <Tab
           onPress={() => this.props.navigation.navigate('LoginScreen')}
            barBackgroundColor="#5D4037"
            label="Logout"
            icon={<Icon size={24} color="white" name="power" />}
          />
          <Tab
            barBackgroundColor="skyblue"
            icon={<Icon size={24} color="skyblue" name="blank" />}
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

export default connect(mapStateToProps, mapDispatchToProps)(MentalHealth)
