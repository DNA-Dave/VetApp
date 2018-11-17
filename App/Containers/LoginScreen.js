import React, { Component } from 'react'
import { View, Text, TextInput, Button, ActivityIndicator} from 'react-native'
import { connect } from 'react-redux'


// Components import
import SecureTextEntry from '../Components/SecureTextEntry.js'

// Styles
import styles from './Styles/LoginScreenStyle'

// Configs
import {firebase} from '../Config/Firebase';


class LoginScreen extends Component {
  state = { 
    email: '', password: '', error: '', loading: false, loggedIn: false, user: ''
  };
  onLoginPress() {
        this.setState({ error: '', loading: true });
        const { email, password } = this.state;

        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
            .then((user) => { 
                console.log("Authetication successful")
                this.setState({ error: 'Authentication successful', loading: false , loggedIn: true}); 
                this.props.navigation.navigate('DashboardScreen')
            })
           .catch(() => {
                this.setState({ error: 'Authentication failed.', loading: false, loggedIn: false });
                console.log("Auth Failed")
            });         
  }
  renderButtonOrSpinner() {
      if (this.state.loading) {
          return <ActivityIndicator size="small" color="#00ff00" />;    
      }
      return <View style={styles.button}>
               <Button onPress={this.onLoginPress.bind(this)} title="Log in" color="#011936" />
               </View>;
  }

  render () {
    return (
      <View style={styles.container}>

        <View style={styles.container2}>
            <Text style={styles.welcomeText}>Welcome to VetHub!</Text>
          </View>
        <Text style={styles.text}>Email Address</Text>
        <SecureTextEntry
            label=''
            placeholder='you@domain.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
        />
        <Text style={styles.text}>Password</Text>
        <SecureTextEntry 
            label=''
            autoCorrect={false}
            placeholder='*******'
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
        />
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        {this.renderButtonOrSpinner()}
         <View style={styles.placeholder}></View>
         <View style={styles.container2}>
            <Text style={styles.createAccount}>New Here? Create an Account!</Text>
          </View>
          <View style={styles.button}>
            <Button onPress={() => this.props.navigation.navigate('CreateAccount')} title="Create Account" color="#011936"/>
          </View>
          <View style={styles.button}>
            <Button onPress={() => this.props.navigation.navigate('ForgotPasswordScreen')} title="Forgot Password" color="#011936"/>
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)



