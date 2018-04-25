import Immutable from 'seamless-immutable';
import { actions } from './actions';

const defaultState = { showingNotifications: false, showingProfileOptions: false };

export default function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.TOGGLE_SHOW_NOTIFICATIONS:
      return state.merge({
        showingNotifications: !state.showingNotifications,
        showingProfileOptions: false
      });
    case actions.TOGGLE_SHOW_PROFILE_OPTIONS:
      return state.merge({
        showingProfileOptions: !state.showingProfileOptions,
        showingNotifications: false
      });
    default:
      return state;
  }
}
