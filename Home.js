import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  FlatList,
  Button,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  SectionList,
  Text
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import {addRound} from './image';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isJourneyListSelected: true,
    };
  }

  _btnAddRoundClicked() {
    ImagePicker.launchCamera(options, (response) => {
      // Same code as in above section!
    });
  }
  
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
            flexDirection: 'row',
            alignSelf: 'stretch',
          }}>
          <View style={styles.buttonContainer}>
            <Button
              title="Journey List"
              color="#ffffff"
              onPress={() => {
                this.state.isJourneyListSelected = true;
                console.log(this.state.isJourneyListSelected, '1');
              }}
            />
          </View>
          <View style={{width: 2, backgroundColor: '#0d2734'}}></View>
          <View style={styles.buttonContainer}>
            <Button
              title="Receipt List"
              color="#ffffff"
              titleStyle={{fontSize: 400}}
              onPress={() => {
                this.state.isJourneyListSelected = false;
                console.log(this.state.isJourneyListSelected, '2');
              }}
              style={{fontSize: 50}}
            />
          </View>
        </View>
        <View style={{height: 2, backgroundColor: '#0d2734'}}></View>
        <SectionList
          renderItem={({item, index, section}) => (
            <Text key={index}>{item}</Text>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={{fontWeight: 'bold'}}>{title}</Text>
          )}
          sections={[
            {title: 'Title1', data: ['item1', 'item2']},
            {title: 'Title2', data: ['item3', 'item4']},
            {title: 'Title3', data: ['item5', 'item6']},
          ]}
          keyExtractor={(item, index) => item + index}
          extraData={this.state.isJourneyListSelected}
        />
        <ScrollView></ScrollView>
        <TouchableHighlight
          onPress={this._btnAddRoundClicked}
          style={{
            height: 44,
            width: 44,
            borderRadius:22,
            alignSelf: 'center',
            zIndex: 1,
            marginBottom: -22,
          }}>
          <Image style={{height: 44, width: 44}} source={addRound} />
        </TouchableHighlight>
        <View style={{height: 2, backgroundColor: '#0d2734'}}></View>
        <View
          style={{
            height: 44,
            backgroundColor: '#639bad',
            flexDirection: 'row',
            alignSelf: 'stretch',
          }}>
          <View style={styles.buttonContainer}>
            <Button title="Your Detail" color="#ffffff" />
          </View>
          <View style={{width: 2, backgroundColor: '#0d2734'}}></View>
          <View style={styles.buttonContainer}>
            <Button title="Report" color="#ffffff" />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
  },
});
