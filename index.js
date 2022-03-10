/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { BarNavigation } from './src/routes/app.routes';
import Feed from './src/screens/Feed';

AppRegistry.registerComponent(appName, () => App);
