import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  FlatList,
  Button,
  ScrollView,
  TextInput
} from 'react-native';

class ViewTitleHeader extends Component {
  render() {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', height: 30}}>
        <Text style={{ color: '#000000', fontSize: 14, marginLeft: 12 }}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}
class ViewTextInput extends Component {
    render() {
      return (
          <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#cadfe5', margin}}>
          <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        </View>
      );
    }
  }
export default class YourDetail extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            height: 100,
            backgroundColor: '#0d2734',
          }}></View>

        <View
          style={{
            height: 44,
            backgroundColor: '#639bad',
          }}>
          <Text style={{color: '#ffffff', padding: 12, fontSize: 16}}>
            Your Details
          </Text>
        </View>
        <ScrollView>
          <ViewTitleHeader title=" Hey" />
          <ViewTextInput>
              
          </ViewTextInput>

        </ScrollView>

        <View
          style={{
            height: 44,
            backgroundColor: '#0d2734',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Button
            onPress={() => {
              alert('You tapped the button!');
            }}
            title="Back"
            color="#ffffff"
          />
          <Button
            onPress={() => {
              alert('You tapped the button!');
            }}
            title="Done"
            color="#ffffff"
          />
        </View>
      </SafeAreaView>
    );
  }
}
