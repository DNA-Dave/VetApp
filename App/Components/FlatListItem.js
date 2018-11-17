import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Button , Linking, TouchableOpacity} from 'react-native'
import styles from './Styles/HorizontalScrollStyle'

export default class FlatListItem extends Component {
  render () {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "white",
            flexDirection: "column"
        }}>
          <View style={{
            flex: 1,
            backgroundColor: "white",
            flexDirection: "row"
          }}>
            <Image
              source = {{uri: this.props.item.url}}
              style = {{width: 40, height: 40, margin: 5}}
            >
            </Image>

            <View style = {{
              flex: 1,
              flexDirection: "column"
            }}>
              <Text style={styles1.flatListItem}> {this.props.item.name} </Text>
              <Text style={styles1.flatListItem1}> {this.props.item.description} </Text>
            </View>
            
            <View style={styles1.button}>
            <Button title='Go to' onPress={ ()=> Linking.openURL(this.props.item.actualurl) } />
            </View>




          </View>

          <View style = {{
            height: 1,
            backgroundColor: "white"
          }}>

          </View>
        </View>

      
    )
  }
}

const styles1 = StyleSheet.create({
  flatListItem: {
    color: 'black',
    padding: 10,
    fontSize: 20,
  },
  flatListItem1: {
    color: 'black',
    padding: 10,
    fontSize: 14,
  },
  button: {
    height: 30,
    width: 70,
    backgroundColor: '#DCDCDC'
  }
});