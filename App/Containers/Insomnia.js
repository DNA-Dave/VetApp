import React, { Component } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/InsomniaStyle'

class Insomnia extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
       <View style={styles.container}>
       <Text style = {styles.textStyleTitle}>
            Insomnia
       </Text>
      <ScrollView style={styles.scroll}>
        <TouchableOpacity style={styles.after}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              After Deployment
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.coach}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              CBTi Coach
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.revamp}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              Revamp
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.dream}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              Dream Easy
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

export default connect(mapStateToProps, mapDispatchToProps)(Insomnia)
