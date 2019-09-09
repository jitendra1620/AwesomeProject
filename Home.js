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
  _renderViewForSelectedButtonUnderLineForJourney() {
    if (this.state.isJourneyListSelected) {
      return <View style={{backgroundColor: 'white', height: 1}}></View>;
    }
    return null;
  }
  _renderViewForSelectedButtonUnderLineForReceipt() {
    if (this.state.isJourneyListSelected == false) {
      return <View style={{backgroundColor: 'white', height: 1}}></View>;
    }
    return null;
  }
  _renderViewSectionListHeader() {
    if (this.state.isJourneyListSelected == false) {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-around',
            justifyContent: 'space-between',
            paddingHorizontal: 8,
          }}>
          <Text
            style={{
              fontWeight: '100',
              flex: 2.5,
              alignSelf: 'center',
              alignContent: 'center',
            }}>
            Date
          </Text>
          <Text
            style={{
              fontWeight: '100',
              flex: 4,
              alignSelf: 'center',
              alignContent: 'center',
            }}>
            Destination
          </Text>
          <Text
            style={{
              fontWeight: '100',
              flex: 2.5,
              alignSelf: 'center',
              alignContent: 'center',
            }}>
            Reason
          </Text>
          <Text
            style={{
              fontWeight: '100',
              flex: 2,
              alignSelf: 'center',
              alignContent: 'center',
            }}>
            Total
          </Text>
        </View>
      );
    }
    return (
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'space-around',
          justifyContent: 'space-between',
          paddingHorizontal: 8,
        }}>
        <Text style={{fontWeight: '100'}}>Date</Text>
        <Text style={{fontWeight: '100'}}>Receipt Description</Text>
        <Text style={{fontWeight: '100'}}>Amount</Text>
      </View>
    );
  }
  _btnAddRoundClicked() {
    if (this.state.isJourneyListSelected) {
      Navigation.showModal({
        component: {
          name: 'AddJourney',
          passProps: {
            isFromHome: true,
          },
        },
      });
    } else {
      const options = {
        title: 'Select Avatar',
        customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      ImagePicker.launchImageLibrary(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else {
          this.setState({fileURL: response.uri});
        }
      });
    }
  }
  selectionList = () => {
    if (this.state.isJourneyListSelected) {
      return [
        {
          title: '',
          data: [
            '1',
            '2',
            '3',
          ],
        },
      ];
    }
    return [
      {
        title: '',
        data: [
          'item1',
          'item2',
          'item3',
          'item4',
          'item5',
          'item6',
          'item1',
          'item2',
          'item3',
          'item4',
          'item5',
          'item6',
          'item1',
          'item2',
          'item3',
          'item4',
          'item5',
          'item6',
        ],
      },
    ];
  };
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
                this.setState({isJourneyListSelected: true});
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
                this.setState({isJourneyListSelected: false});
                console.log(this.state.isJourneyListSelected, '2');
              }}
            />
            {this._renderViewForSelectedButtonUnderLineForReceipt()}
          </View>
        </View>
        <View style={{height: 2, backgroundColor: '#0d2734'}}></View>
        <SectionList
          stickySectionHeadersEnabled={false}
          renderItem={({item, index, section}) => (
            <View style={{height:35, backgroundColor:"green", justifyContent: 'center',
                flex: 1, flexDirection:"column"}}><Text key={index} style={{ paddingHorizontal:10}}>{item}</Text><View style={{height:0.4, backgroundColor:"white", bottom:-9}}></View></View>
          )}
          renderSectionHeader={({section}) => (
            <View
              style={{
                height: 35,
                justifyContent: 'center',
                backgroundColor: 'lightgray',
                flex: 1,
              }}>
              {this._renderViewSectionListHeader()}
              <View
                style={{
                  height: 0.352,
                  backgroundColor: '#0d2734',
                  bottom: -8,
                }}></View>
            </View>
          )}
          sections={this.selectionList()}
          keyExtractor={(item, index) => item + index}
          extraData={this.state.isJourneyListSelected}
        />
        <TouchableHighlight
          onPress={this._btnAddRoundClicked.bind(this)}
          style={{
            height: 44,
            width: 44,
            borderRadius: 22,
            alignSelf: 'center',
            zIndex: 1,
            marginBottom: -22,
            position: "absolute",
            bottom:100
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
            <Button
              title="Report"
              color="#ffffff"
              onPress={() => {
                console.log('Push try');
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'YourDetail',
                  },
                });
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});
