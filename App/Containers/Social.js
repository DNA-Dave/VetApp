import React, { Component } from 'react'
import { ScrollView, Text, FlatList, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

// Styles
import styles from './Styles/SocialStyle'
import FlatListItem from '../Components/FlatListItem.js'
class Social extends Component {

render () {
    return (
      <View style={styles.container}>
          <Text style = {styles.textStyleTitle}>
            Social
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
                  name: 'IAVA',
                  description: 'Veteran Political Agenda',
                  url: "https://png.icons8.com/dusk/40/000000/groups.png",
                  actualurl: "https://iava.org/"
                },
                {
                  key: "6131233",
                  name: 'VetFriend',
                  description: 'Find Veteran Friends',
                  url: "https://png.icons8.com/dusk/40/000000/groups.png",
                  actualurl: "https://www.vetfriends.com/?source=bing_pd&msclkid=ace0d948a9e213113c518389a35d3ebf"
                },
                {
                  key: "7131232",
                  name: 'Togeather We Served',
                  description: 'Reconnection Veterans',
                  url: "https://png.icons8.com/dusk/40/000000/groups.png",
                  actualurl: "https://www.togetherweserved.com/"
                },
                {
                  key: "8131231",
                  name: 'Rally Point',
                  description: 'Veteran Social Media Platform',
                  url: "https://png.icons8.com/dusk/40/000000/groups.png",
                  actualurl: "https://www.rallypoint.com/"
                },
                {
                  key: "9131230",
                  name: 'Social Media Directory',
                  description: 'VA Resources',
                  url: "https://png.icons8.com/dusk/40/000000/groups.png",
                  actualurl: "https://www.va.gov/opa/socialmedia.asp"
                },
                ]}
              renderItem={({item, index}) => {
                

                return (

                <FlatListItem item={item} index={index}>

                </FlatListItem>);


              }}
            /> 

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

export default connect(mapStateToProps, mapDispatchToProps)(Social)
