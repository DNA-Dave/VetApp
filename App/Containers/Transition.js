import React, { Component } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TransitionStyle'

class Transition extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
             <View style={styles.container}>
       <Text style = {styles.textStyleTitle}>
            Transition
       </Text>
      <ScrollView style={styles.scroll}>
        <TouchableOpacity style={styles.stair}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              Finding Your Purpose After Active Duty
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.mood}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              Translating Your Military Skills
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.first}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              Vet Roadmap
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.moving}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              Career Spark
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

export default connect(mapStateToProps, mapDispatchToProps)(Transition)
