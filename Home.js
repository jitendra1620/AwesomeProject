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
  Text,
  AsyncStorage,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {USER_KEY} from './config';
import {addRound} from './image';
import {Navigation} from 'react-native-navigation';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isJourneyListSelected: true,
      fileURL: '',
    };
  }
  async componentWillMount() {
    try {
      const user = await AsyncStorage.getItem(USER_KEY);
      console.log('user: ', user);
      if (user) {
        // goHome()
      } else {
        // goToAuth()
      }
    } catch (err) {
      console.log('error: ', err);
      // goToAuth()
    }
  }
_renderViewForSelectedButtonUnderLineForJourney(){
  if (this.state.isJourneyListSelected){
    return <View style={{ backgroundColor:"white", height:2}}></View>
  }
  return null;
}
_renderViewForSelectedButtonUnderLineForReceipt(){
  if (this.state.isJourneyListSelected == false){
    return <View style={{ backgroundColor:"white", height:2}}></View>
  }
  return null;
}
  _btnAddRoundClicked() {
    if (this.state.isJourneyListSelected){
      Navigation.showModal({
        component: {
          name: 'AddJourney',
          passProps: {
            isFromHome: true,
          },
        },
      });
    }else{
      const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      ImagePicker.launchImageLibrary(options, (response) => {
        
        
        if(response.didCancel){
          console.log('User cancelled image picker');
        }
        else{
         this.setState({ fileURL: response.uri });
        }
      });
    }
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
              fontSize={30}
              color="#ffffff"
              onPress={() => {
                this.setState({isJourneyListSelected:true})
                console.log(this.state.isJourneyListSelected, '1');
              }}
            />
            {this._renderViewForSelectedButtonUnderLineForJourney()}
          </View>
          <View style={{width: 2, backgroundColor: '#0d2734'}}></View>
          <View style={styles.buttonContainer}>
            <Button
              title="Receipt List"
              color="#ffffff"
              onPress={() => {
                this.setState({isJourneyListSelected:false})
                console.log(this.state.isJourneyListSelected, '2');
              }}
            />
            {this._renderViewForSelectedButtonUnderLineForReceipt()}
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
          onPress={this._btnAddRoundClicked.bind(this)}
          style={{
            height: 44,
            width: 44,
            borderRadius: 22,
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
            <Button
              title="Your Detail"
              color="#ffffff"
              onPress={() => {
                console.log('Push try');
                Navigation.showModal({
                  component: {
                    name: 'YourDetail',
                    passProps: {
                      isFromHome: true,
                    },
                  },
                });
                // Navigation.push(this.props.componentId, {
                //   component: {
                //     name: "YourDetail"
                //   }
                // })
              }}
            />
          </View>
          <View style={{width: 2, backgroundColor: '#0d2734'}}></View>
          <View style={styles.buttonContainer}>
            <Button title="Report" color="#ffffff" onPress={() => {
                console.log('Push try');
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'YourDetail',
                  }
                });
              }}/>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,flexDirection:"column", justifyContent:"space-around"
  },
});
