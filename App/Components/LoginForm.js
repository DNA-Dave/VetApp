import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Button, ActivityIndicator, } from 'react-native'
import styles from './Styles/LoginFormStyle'

// Configs
import firebase from '../Config/Firebase';

// Components
import SecureTextEntry from './SecureTextEntry.js'


export default class LoginForm extends Component {
  
  state = { email: '', password: '', error: '', loading: false };
    onLoginPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false }); })
            .catch(() => {
                //Login was not successful, let's create a new account
                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(() => { 
                      this.setState({ error: 'Authentication successful', loading: false }); 
                      this.props.navigation.navigate('DashboardScreen');
                    })
                    .catch(() => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                    });
            });
    }
    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <ActivityIndicator size="small" color="#00ff00" />;    
        }
        return <Button onPress={this.onLoginPress.bind(this)} title="Log in" />;
    }
    render() {
        return (
            <View>
                    <SecureTextEntry
                        style={styles.input}
                        label='Email Address'
                        placeholder='you@domain.com'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <SecureTextEntry
                        style={styles.input} 
                        label='Password'
                        autoCorrect={false}
                        placeholder='*******'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                    {this.renderButtonOrSpinner()}
            </View>
        );
    }
}
