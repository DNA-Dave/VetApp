import React, { Component } from 'react'
import { ScrollView, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HealthStyle'
import FlatListItem from '../Components/FlatListItem.js'
class Health extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

render () {
    return (
      <View style={styles.container}>
          <Text style = {styles.textStyleTitle}>
            Health
          </Text>
          <View style={{flex:1, marginTop: 5, marginBottom: 5, backgroundColor: "#011936"}}>
            <Text style = {styles.textStyleSub}>
              Mental Health
            </Text>
          <View style = {{
            height: 10,
            backgroundColor: "#011936"
          }}>

          </View>

            <FlatList
              data={[
                {
                  key: "5131234",
                  name: 'Mood Coach',
                  description: 'Therapy',
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Caduceus.svg/299px-Caduceus.svg.png",
                  actualurl: "https://mobile.va.gov/app/mood-coach"
                },
                {
                  key: "6131233",
                  name: 'Revamp Veterans',
                  description: 'Insomnia',
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Caduceus.svg/299px-Caduceus.svg.png",
                  actualurl: "https://mobile.va.gov/app/revamp-veterans"
                },
                {
                  key: "7131232",
                  name: 'PTSD Family Coach',
                  description: 'PTSD',
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Caduceus.svg/299px-Caduceus.svg.png",
                  actualurl: "https://mobile.va.gov/app/ptsd-family-coach"
                },
                {
                  key: "8131231",
                  name: 'Stay Quit Coach',
                  description: 'Smoking',
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Caduceus.svg/299px-Caduceus.svg.png",
                  actualurl: "https://mobile.va.gov/app/stay-quit-coach"
                },
                {
                  key: "9131230",
                  name: 'Stay Vet Change',
                  description: 'Drinking',
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Caduceus.svg/299px-Caduceus.svg.png",
                  actualurl: "https://mobile.va.gov/app/vetchange"
                },
                {
                  key: "1131229",
                  name: 'Mindfulness Coach',
                  description: 'Mindfulness',
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Caduceus.svg/299px-Caduceus.svg.png",
                  actualurl: "https://mobile.va.gov/app/mindfulness-coach"
                },
                {
                  key: "22131228",
                  name: 'Anger Management Skills',
                  description: 'Anger',
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Caduceus.svg/299px-Caduceus.svg.png",
                  actualurl: "https://mobile.va.gov/app/anger-and-irritability-management-skills-aims"
                },
                {
                  key: "33131228",
                  name: 'For Women Veterans',
                  description: 'Womens Rescources',
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Caduceus.svg/299px-Caduceus.svg.png",
                  actualurl: "https://mobile.va.gov/app/caring-4-women-veterans"
                },
                ]}
              renderItem={({item, index}) => {
                

                return (

                <FlatListItem item={item} index={index}>

                </FlatListItem>);


              }}
            /> 
    </View>


    <View style={{flex:1, marginTop: 5, marginBottom: 5, backgroundColor: "#011936"}}>
            <Text style = {styles.textStyleSub}>
              Physical Health
            </Text>
          <View style = {{
            height: 10,
            backgroundColor: "#011936"
          }}>

          </View>
            <FlatList
              data={[
                {
                  key: "4131234",
                  name: 'Ask A Parmacist',
                  description: 'Mecdicine',
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Caduceus.svg/299px-Caduceus.svg.png",
                  actualurl: "https://mobile.va.gov/app/ask-a-pharmacist"
                },
                {
                  key: "4131233",
                  name: 'Ulcer Resources',
                  description: 'Ulcers',
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Caduceus.svg/299px-Caduceus.svg.png",
                  actualurl: "https://mobile.va.gov/app/va-pressure-ulcer-resource"
                },
                {
                  key: "4131232",
                  name: 'PE Coach',
                  description: 'Physical Activity',
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Caduceus.svg/299px-Caduceus.svg.png",
                  actualurl: "https://mobile.va.gov/app/pe-coach" 
                },
                {
                  key: "4131231",
                  name: 'Move Coach',
                  description: 'Physical Activity',
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Caduceus.svg/299px-Caduceus.svg.png",
                  actualurl: "https://mobile.va.gov/app/move-coach"
                },
                {
                  key: "4131230",
                  name: 'Mobile Kidney',
                  description: 'Drinking',
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Caduceus.svg/299px-Caduceus.svg.png",
                  actualurl: "https://mobile.va.gov/app/mobilekidney"    
                },
                {
                  key: "4131229",
                  name: 'Concussion Coach',
                  description: 'Concussion',
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Caduceus.svg/299px-Caduceus.svg.png",
                  actualurl: "https://mobile.va.gov/app/concussion-coach" 
                },
                ]}
              renderItem={({item, index}) => {
                

                return (

                <FlatListItem item={item} index={index}>

                </FlatListItem>);


              }}
            /> 
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

export default connect(mapStateToProps, mapDispatchToProps)(Health)

