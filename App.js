/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';

import HideShow from './src/component/HideShow';
import JsonParsing from './src/component/JsonParsing';
import ActivityProject from './src/component/stackNavigator';
import DatePickerEx from './src/component/DatePickerEx';
import SnackBar from './src/component/SnackBarEx/SnackBar';
import Projects from './src/component/nestedViews/Project';
import GridView from './src/component/GridView';
import FetchExample from './src/component/FetchExample';
import SeekBar from './src/component/SeekBar';
import SwitchButton from './src/component/SwitchButton';
import AsyncFun from './src/component/AsyncFun';
import DynamicallyAddRenderView from './src/component/DynamicallyAddRenderView';
import LinkPerview from './src/component/LinkPreview';
import PopupOptionUI from './src/component/PopupOptionUI';
import DynamicViewValue from './src/component/DynamicViewValue';
import NetworkCheck from './src/component/NetworkCheck';
import TransLoaditApi from './src/component/transload/TransLoaditApi';
import Demo from './src/component/InViewCenter/Demo';
import HashTagTest from './src/component/hashTagsExample/HashTagTest';
import ModalExample from './src/component/ModalExample';
import YourDetail from "./JS/YourDetail"

import ListNWebService from "./JS/ListNWebService"

export default class App extends React.Component {
  render() {
    return (
      <YourDetail />
    );
  }
}
