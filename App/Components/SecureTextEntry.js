import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native'
import styles from './Styles/SecureTextEntryStyle'

export default class SecureTextEntry extends Component {

  render () {
    return (
     <View style={styles.container}>
            <Text style={styles.labelStyle}>{this.props.label.toUpperCase()}</Text>
            <TextInput
                autoCorrect={false}
                autoCapitalize ='none'
                placeholder={this.props.placeholder}
                secureTextEntry={this.props.secureTextEntry}
                value={this.props.value}
                onChangeText={this.props.onChangeText}
                style={styles.inputStyle}
            />
        </View>
    )
  }
}
