/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';

// export default class App extends Component {
//   render () {
//     return (
//       <Provider store={store}>
//         <Routes />
//       </Provider>
//     );
//   }
// }

AppRegistry.registerComponent (appName, () => App);
