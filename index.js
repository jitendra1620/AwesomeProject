/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import VCManagers from './VCManagers';
import Bananas from "./Bananas";
import LotsOfGreetings from "./LotsOfGreetings";
import BlinkApp from "./BlinkApp"
import FlexDimensionsBasics from "./FlexDimensionsBasics"
import {name as appName} from './app.json';


import {Navigation} from 'react-native-navigation';
import {registerScreens} from './JS/screens';

registerScreens();
// AppRegistry.registerComponent(appName, () => App);
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'Home'
        }
      },
    });
  });