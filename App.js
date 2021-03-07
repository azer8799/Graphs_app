import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/screens/Login.js';
import  Info from './src/screens/Info.js';





  const appNavigator = createStackNavigator(
    {
      HomePage: Login,
      Information: Info,
    },
    
  );

export default createAppContainer(appNavigator);
