import React, { Component } from 'react'
import { ScrollView, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HousingStyle'
import FlatListItem from '../Components/FlatListItem.js'
class Housing extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

render () {
    return (
      <View style={styles.container}>
          <Text style = {styles.textStyleTitle}>
            Housing
          </Text>
          <View style={{flex:1, marginTop: 5, marginBottom: 5, backgroundColor: "#011936"}}>
            <Text style = {styles.textStyleSub}>
              VA Housing
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
                  name: 'Homeless Veterans',
                  description: 'Homelessness',
                  url: "https://png.icons8.com/ios/40/000000/link-company-child.png",
                  actualurl: "https://www.va.gov/HOMELESS/housing.asp"
                },
                {
                  key: "4131233",
                  name: 'VA Home Loans',
                  description: 'Loans',
                  url: "https://png.icons8.com/ios/40/000000/link-company-child.png",
                  actualurl: "https://www.benefits.va.gov/homeloans/adaptedhousing.asp"
                },
                {
                  key: "4131232",
                  name: 'Housing Help',
                  description: 'Housing Information',
                  url: "https://png.icons8.com/ios/40/000000/link-company-child.png",
                  actualurl: "https://www.usa.gov/veteran-housing"
                },
                {
                  key: "4131231",
                  name: 'Geriatrics and Extended Care',
                  description: 'Care',
                  url: "https://png.icons8.com/ios/40/000000/link-company-child.png",
                  actualurl: "https://www.va.gov/GERIATRICS/Guide/LongTermCare/State_Veterans_Homes.asp#"
                },
                {
                  key: "4131230",
                  name: 'Veterans Abroad',
                  description: 'Living Abroad',
                  url: "https://png.icons8.com/ios/40/000000/link-company-child.png",
                  actualurl: "https://www.benefits.va.gov/PERSONA/veteran-abroad.asp"
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
              Non VA Housing
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
                  name: 'Miliary VA Loan',
                  description: 'Loans',
                  url: "https://png.icons8.com/ios/40/000000/link-company-child.png",
                  actualurl: "https://www.militaryvaloan.com/va-purchase-loan?creative=80676690690074&keyword=homes%20for%20veterans&matchtype=e&device=c&network=o&utm_campaign=P-BI-MVL-M-Purch%3AVA-EN-Search-Exact-MDT-CPC&utm_medium=cpc&utm_source=bing&groupid=4048825292&target=kwd-29582517045:loc-190&queryText=housing%20for%20veterans"
                },
                {
                  key: "4131233",
                  name: 'VA Mortage Center',
                  description: 'Mortage',
                  url: "https://png.icons8.com/ios/40/000000/link-company-child.png",
                  actualurl: "https://www.vamortgagecenter.com/f/show_form.html/?src=msn&adg=mvetlon&desc=veteranhomeloans&msclkid=b0f0b0700a7d1a6b36a9eab11b9c2d84&utm_source=bing&utm_medium=cpc&utm_campaign=VAMC%20-%20Main%20VA%20Mortgage%20Center&utm_term=veteran%20housing&utm_content=Veteran%20Home%20Loans"
                },
                {
                  key: "4131232",
                  name: 'Homes for Injured Veterans',
                  description: 'Homes',
                  url: "https://png.icons8.com/ios/40/000000/link-company-child.png",
                  actualurl: "https://www.hfotusa.org/" 
                },
                {
                  key: "4131231",
                  name: 'Veterans United Home Loans',
                  description: 'Home Loans',
                  url: "https://png.icons8.com/ios/40/000000/link-company-child.png",
                  actualurl: "https://www.veteransunited.com/v3/lp/?src=msn&adg=msrchreta&desc=veteranhomeloans&msclkid=b948a492ce071e652514fe53d2c628d0&utm_source=bing&utm_medium=cpc&utm_campaign=NS%20-%20Search%20Retargeting%20VA%20Assist&utm_term=houses%20for%20veterans&utm_content=Veteran%20Home%20Loan "
                },
                {
                  key: "4131230",
                  name: 'Housing Help',
                  description: 'Information on how to find suitable housing',
                  url: "https://png.icons8.com/ios/40/000000/link-company-child.png",
                  actualurl: "http://www.mass.gov/veterans/housing/help-with-rent-and-finding-a-place-to-live.html"    
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

export default connect(mapStateToProps, mapDispatchToProps)(Housing)
