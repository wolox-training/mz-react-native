// https://github.com/react-community/react-navigation/issues/458
// once that issue is resolved, the initial loading screen is no longer needed and should be removed
//  in favour of setting the initialRoute as a prop of the navigator

import { StackNavigator } from 'react-navigation';

import * as Routes from '../constants/routes';
import { stackNavConfig, screensNavOptions,  } from '../config/navigation';

import TodoList from './screens/TodoList';

export default StackNavigator(
  {
    [Routes.TodoList]: {
      screen: TodoList,
      navigationOptions: screensNavOptions[Routes.TodoList]
    }
  },
  stackNavConfig
);