import React, { Component } from 'react'
import { ScrollView, Text, ListView, View, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CareerCenterStyle'
import FlatListItem from '../Components/FlatListItem.js'
class CareerCenter extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }


render () {
    return (
      <View style={styles.container}>
          <Text style = {styles.textStyleTitle}>
            Career Center
          </Text>
          <View style={{flex:1, marginTop: 5, marginBottom: 5, backgroundColor: "#011936"}}>
            <Text style = {styles.textStyleSub}>
              Job Opportunities
            </Text>
          <View style = {{
            height: 10,
            backgroundColor: "#011936"
          }}>

          </View>

            <FlatList
              showsVerticalScrollIndicator={true}
              data={[
                {
                  key: "4131234",
                  name: 'Troops to Teachers',
                  description: 'Teaching Jobs',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "http://www.proudtoserveagain.com/"
                },
                {
                  key: "4131233",
                  name: 'Helmets to Hardhats',
                  description: 'Construction Jobs',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://helmetstohardhats.org/"
                },
                {
                  key: "4131232",
                  name: 'VA Job Finder',
                  description: 'VA Job Opportunities',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://www.vaforvets.va.gov/vaforvets/JobSeekers/Pages/default.asp"
                },
                {
                  key: "4131231",
                  name: 'Vet Fast Track',
                  description: 'Career Transition',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://vetfasttrack.org/"
                },
                {
                  key: "431230",
                  name: 'Career One Step',
                  description: 'US Department of Labor',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://www.careeronestop.org/JobSearch/job-search.aspx"
                },
                {
                  key: "131240",
                  name: 'Miliary Hire',
                  description: 'Jobs for Veterans',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://www.militaryhire.com/"
                },
                {
                  key: "240",
                  name: 'Hire Purpose',
                  description: 'Find Purposeful Work',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://www.hirepurpose.com/"
                },
                {
                  key: "414240",
                  name: 'Hire Purpose',
                  description: 'Job Search',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://hireveterans.com/"
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
              Recommended
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
                  name: 'MOC to Civilian Code Translator',
                  description: 'MOC Translator',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://www.taonline.com/jobsaurus/"
                },
                {
                  key: "431233",
                  name: 'Vet Roadmap',
                  description: 'Guide to Civilian Life Transition',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://www.vetroadmap.org/"
                },
                {
                  key: "413122",
                  name: 'Career Spark',
                  description: 'Building Career Resume',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://www.mycareerspark.org/#/" 
                },
                {
                  key: "41231",
                  name: 'Find a Job',
                  description: 'US Department of Labor',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://www.dol.gov/veterans/findajob/"
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
              Other
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
                  name: 'Linkedin for Veterans',
                  description: 'Linkedin',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://www.linkedin.com/learning/linkedin-for-veterans-2"
                },
                {
                  key: "4131233",
                  name: 'Resume Engine',
                  description: 'Create a Resume',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://www.resumeengine.org/#/"
                },
                {
                  key: "4131232",
                  name: 'Translating Skills to Civilian Life',
                  description: 'Finding Civilian Jobs',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://www.linkedin.com/learning/translating-your-military-skills-to-civilian-workplace" 
                },
                {
                  key: "4131231",
                  name: 'Linkedin Skill Development',
                  description: 'Linkedin Learning',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://www.linkedin.com/learning/florent-groberg-on-finding-your-purpose-after-active-duty?src=direct%2Fnone&veh=direct%2Fnone%7Cdirect%2Fnone"
                },
                {
                  key: "4131230",
                  name: 'Veterati',
                  description: 'Mentoring',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://www.veterati.com/"    
                },
                {
                  key: "413123430",
                  name: 'ACP Mentoring Program',
                  description: 'Mentoring',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://www.acp-usa.org/mentoring-program/program-overview"    
                },
                {
                  key: "412340",
                  name: 'US Veteran Support',
                  description: 'Mentoring',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://www.callofdutyendowment.org/us_veteran_support"    
                },
                {
                  key: "2230",
                  name: 'VA Volunteering',
                  description: 'Volunteering',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://www.volunteer.va.gov/apps/VolunteerNow/default.asp"    
                },
                {
                  key: "230",
                  name: 'Mission Continues',
                  description: 'Volunteering',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://missioncontinues.org/about/"    
                },
                {
                  key: "231",
                  name: 'Team RWB',
                  description: 'Volunteering',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://www.teamrwb.org/about-us/mission/"    
                },
                {
                  key: "232",
                  name: 'Team Rubicon',
                  description: 'Volunteering',
                  url: "https://png.icons8.com/ultraviolet/40/000000/briefcase.png",
                  actualurl: "https://teamrubiconusa.org/"    
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

export default connect(mapStateToProps, mapDispatchToProps)(CareerCenter)

