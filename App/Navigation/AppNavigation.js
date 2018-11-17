import { StackNavigator } from 'react-navigation'
import General from '../Containers/General'
import Substance from '../Containers/Substance'
import Mindfulness from '../Containers/Mindfulness'
import Therapy from '../Containers/Therapy'
import Ptsd from '../Containers/Ptsd'
import Insomnia from '../Containers/Insomnia'
import Mentor from '../Containers/Mentor'
import Volunteer from '../Containers/Volunteer'
import Jobs from '../Containers/Jobs'
import Resume from '../Containers/Resume'
import Transition from '../Containers/Transition'
import PhysicalHealth from '../Containers/PhysicalHealth'
import MentalHealth from '../Containers/MentalHealth'
import ForgotPasswordScreen from '../Containers/ForgotPasswordScreen'
import CreateAccount from '../Containers/CreateAccount'
import Social from '../Containers/Social'
import Health from '../Containers/Health'
import Housing from '../Containers/Housing'
import CareerCenter from '../Containers/CareerCenter'
import DashboardScreen from '../Containers/DashboardScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import { NavigationComponent } from 'react-native-material-bottom-navigation'



import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  General: { screen: General },
  Substance: { screen: Substance },
  Mindfulness: { screen: Mindfulness },
  Therapy: { screen: Therapy },
  Ptsd: { screen: Ptsd },
  Insomnia: { screen: Insomnia },
  Mentor: { screen: Mentor },
  Volunteer: { screen: Volunteer },
  Jobs: { screen: Jobs },
  Resume: { screen: Resume },
  Transition: { screen: Transition },
  PhysicalHealth: { screen: PhysicalHealth },
  MentalHealth: { screen: MentalHealth },
  ForgotPasswordScreen: { screen: ForgotPasswordScreen },
  CreateAccount: { screen: CreateAccount },
  Social: { screen: Social },
  Health: { screen: Health },
  Housing: { screen: Housing },
  CareerCenter: { screen: CareerCenter },
  DashboardScreen: { screen: DashboardScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen },
  CreateAccount: { screen: CreateAccount},
  Menu: {screen: DashboardScreen},
  Logout: {screen: LoginScreen},
  MentalHealth: {screen: MentalHealth},
  PhysicalHealth: {screen:PhysicalHealth},
  Transition: {screen: Transition},
  Resume: {screen: Resume},
  Jobs: {screen: Jobs},
  Volunteer: {screen: Volunteer},
  Mentor: {screen: Mentor},
  Insomnia: {screen: Insomnia},
  PTSD: {screen: Ptsd},
  Therapy: {screen: Therapy},
  Mindfulness: {screen: Mindfulness},
  Substance: {screen: Substance},
  General: {screen: General}
}, 
{
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  },

  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
  bottomNavigationOptions: {
  labelColor: 'white',
  backgroundColor: 'red',
  rippleColor: 'white',
  tabs: {
          Menu: {
            barBackgroundColor: '#37474F',
            labelColor: 'black'
          },
          Logout: {
           barBackgroundColor: '#37474F',
            labelColor: 'black'
          }
      }
    }
  }
})

export default PrimaryNav
