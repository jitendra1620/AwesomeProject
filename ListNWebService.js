import React, {Component} from 'react';
import {SafeAreaView, Text, View, Image, FlatList} from 'react-native';
import axios from 'axios';
export default class ListNWebService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://reactnativecode.000webhostapp.com/FruitsList.php')
      .then(response => {
        console.log(response.data);
        this.setState(
          {
            isLoading: false,
            data: response.data,
          },
          function() {
            // In this block you can do something with new state.
          },
        );
      })
      .catch(error => {
        console.log(error);
      });
  }

  dataUi(item) {
    return (
      <View>
        <View style={{padding: 10}}>
          <Text>hello new data no</Text>
          <Text>{item.id}</Text>
            <Text>{item.fruit_name}</Text>
        </View>
        <View style={{height: 5, backgroundColor: '#627867'}}></View>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View>
          <FlatList
            style={{backgroundColor: '#487867'}}
            data={this.state.data}
            renderItem={({item}) => this.dataUi(item)}
            extraData={this.state.data}
          />
        </View>
      </SafeAreaView>
    );
  }
}
