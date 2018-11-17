import React, { Component } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/JobsStyle'

class Jobs extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
             <View style={styles.container}>
       <Text style = {styles.textStyleTitle}>
            Job Opportunites
       </Text>
      <ScrollView style={styles.scroll}>
        <TouchableOpacity style={styles.stair}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              Fast Track
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.mood}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              CareerOnestop
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.first}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              Troops to Teachers
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.moving}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              Helmets to Hardhats
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.tracker}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              VA
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.life}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              Military Hire
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.virtual}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              Hirepurpose
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.crisis}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              Hire Veterans
            </Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.prevail}
            onPress={() => this.props.navigation.navigate('Insomnia')}
          >
            
            <Text style = {styles.textElements}>
              National Veteran Foundation
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
            barBackgroundColor="skyblue"
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

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
