import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  FlatList,
  Button,
  ScrollView,
  TextInput,
  Picker,
  StyleSheet,
} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';
class ViewTitleHeader extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          height: 30,
        }}>
        <Text style={{color: '#000000', fontSize: 14, marginLeft: 12}}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}
class ViewTextInput extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#cadfe5',
          marginHorizontal: 8,
          padding: 4,
        }}>
        <TextInput
          style={{minHeight: 17, maxHeight: 150, flex: 1}}
          multiline={true}
          placeholder={this.props.placeholder}
        />
      </View>
    );
  }
}
export default class YourDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrTax: new Array(100),
    };
  }
  _onDragEvent() {
    // This callback will be called when the user enters signature
    console.log('dragged');
    
  }
  _onSaveEvent(result) {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    console.log(result);
  }
  saveSign() {
    console.log("saveSign()")
    this.refs.sign.saveImage();
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
          }}>
          <Text style={{color: '#ffffff', padding: 12, fontSize: 16}}>
            Your Details
          </Text>
        </View>
        <ScrollView>
          <ViewTitleHeader title="Hey" />
          <ViewTextInput placeholder="Enter Your Name" />
          <ViewTitleHeader title="Company" />
          <ViewTextInput placeholder="Enter Your Company Name" />
          <ViewTitleHeader title="Address" />
          <ViewTextInput placeholder="Enter Your Address" />
          <View style={{height: 8}}></View>
          <ViewTextInput placeholder="Enter Your Address" />
          <View style={{height: 8}}></View>
          <ViewTextInput placeholder="Enter Your Address" />
          <ViewTitleHeader title="Postcode" />
          <ViewTextInput placeholder="Enter Your Postcode" />
          <ViewTitleHeader title="Signature" />
          <SignatureCapture
            style={[{flex: 1, height: 180, margin: 8}, styles.signature]}
            ref="sign"
            onDragEvent={this._onDragEvent}
            saveImageFileInExtStorage={false}
            showNativeButtons={false}
            showTitleLabel={false}
            viewMode={'portrait'}
          />
          <ViewTitleHeader title="Email Address" />
          <ViewTextInput placeholder="Enter Your Email Address" />
          <ViewTitleHeader title="Tax" />
          <Picker
            style={{
              margin: 5,
            }}
            selectedValue={(this.state && this.state.pickerValue) || 'a'}
            onValueChange={value => {
              this.setState({pickerValue: value});
            }}
            itemStyle={{color: 'black', fontSize: 17}}>
            <Picker.Item label={'1'} value={'b'} />
            <Picker.Item label={'2'} value={'c'} />
            <Picker.Item label={'3'} value={'d'} />
          </Picker>
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
const styles = StyleSheet.create({
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#eeeeee',
    margin: 10,
  },
});
