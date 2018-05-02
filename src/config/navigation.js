import * as Routes from '../constants/routes';
import { cornflowerBlue, white } from '../constants/colors';

import I18n from './i18n';

// Default nav options for all screens
const defaultNavOptions = ({ navigation }) => ({
  title: I18n.t(`app:${navigation.state.routeName}`),
  headerStyle: {
    backgroundColor: cornflowerBlue,
    elevation: 0
  },
  headerBackTitleStyle: {
    color: white
  },
  headerTitleStyle: {
    color: white,
    textAlign: 'center',
    flex: 1
  },
  headerTintColor: white
});

export const screensNavOptions = {
  [Routes.TodoList]: {
    title: 'Todo List'
  }
};

export const stackNavConfig = {
  navigationOptions: defaultNavOptions
};
