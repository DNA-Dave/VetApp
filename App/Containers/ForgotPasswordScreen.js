import React, { Component } from 'react'
import { View, Text, TextInput, Button, ActivityIndicator} from 'react-native'
import { connect } from 'react-redux'


// Components import
import SecureTextEntry from '../Components/SecureTextEntry.js'

// Configs
import {firebase} from '../Config/Firebase';

// Styles
import styles from './Styles/ForgotPasswordScreenStyle'

class ForgotPasswordScreen extends Component {
  state = { 
    email: '', loading: false, error: ''
  };
  onForgotPasswordPress() {
        this.setState({ error: '', loading: true });
        const { email } = this.state;

        firebase.auth().sendPasswordResetEmail(email)
            .then((user) => { 
                console.log("Reset Successful");
                this.setState({ error: 'Reset Successful', loading: false }); 
                this.props.navigation.navigate('DashboardScreen');
            })
           .catch((err) => {
                this.setState({ error: err.message, loading: false });
                console.log("Could not reset password" + err.code);
            });         
  }
  renderButtonOrSpinner() {
      if (this.state.loading) {
          return <ActivityIndicator size="small" color="#00ff00" />;    
      }
      return <Button onPress={this.onForgotPasswordPress.bind(this)} title="Reset Password" color="white"/>;
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
        </View>
        <Text style={styles.text}>Forgot Password</Text>
        <SecureTextEntry 
            label='Email Address'
            placeholder='you@domain.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
        />
        <View style={styles.placeholder2}>
        </View>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
         <View style={styles.button}>
          {this.renderButtonOrSpinner()}
         </View>

         <View style={styles.button}>
            <Button onPress={() => this.props.navigation.navigate('LoginScreen')} title="Return to Login" color="white"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen)
