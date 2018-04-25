import Immutable from 'seamless-immutable';
import { actions } from './actions';

const defaultState = { showingNotifications: false, showingProfileOptions: false };

export default function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.TOGGLE_SHOW_NOTIFICATIONS:
      return state
        .set('showingNotifications', !state.get('showingNotifications'))
        .set('showingProfileOptions', false);
    case actions.TOGGLE_SHOW_PROFILE_OPTIONS:
      return state
        .set('showingProfileOptions', !state.get('showingProfileOptions'))
        .set('showingNotifications', false);
    default:
      return state;
  }
}
