import React, { Component } from 'react'
import { View, Text, TextInput, Button, ActivityIndicator, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'


// Components import
import SecureTextEntry from '../Components/SecureTextEntry.js'

// Configs
import {firebase} from '../Config/Firebase';

// Styles
import styles from './Styles/CreateAccountStyle'

class CreateAccount extends Component {
   state = { 
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    aboutYou: '',
    error: '', 
    loading: false, 
    accountCreated: false, 
  };

  onCreateAccount() {
    this.setState({ error: '', loading: true });
    const { email, password } = this.state;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => { 
            console.log("Account Successfuly Created")
            this.setState({ error: 'Account Successfuly Created', loading: false , accountCreated: true}); 
            this.props.navigation.navigate('LoginScreen')
        })
       .catch((err) => {
            this.setState({ error: err.message, loading: false , accountCreated: false}); 
            console.log("Account Creation Failed" + err.code)
        });         
  }
  renderButtonOrSpinner() {
      if (this.state.loading) {
          return <ActivityIndicator size="small" color="#00ff00" />;    
      } 
        return <Button onPress={this.onCreateAccount.bind(this)} title="Create Account" color="white"/>;
      
  }

  // Put AGE, GENDER, About you.. though they should not be text boxes for the first 2

  render () {
    return (
      <View style={styles.container}>
      <Text style={styles.text}>Name</Text>
         <SecureTextEntry 
            label=''
            placeholder='John Smith'
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            value={this.state.name}
            onChangeText={name => this.setState({name})}    
        />
        <Text style={styles.text}>Email</Text>
        <SecureTextEntry 
            label=''
            placeholder='you@domain.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
        />
        <Text style={styles.text}>Password</Text>
        <SecureTextEntry 
            label=''
            autoCorrect={false}
            placeholder='*******'
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            
        />
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <View style={styles.placeholder}>
        </View>
        <View style={styles.button}>
          {this.renderButtonOrSpinner()}
        </View>
        <View style={styles.placeholder2}>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
