export const actions = {
  TOGGLE_SHOW_NOTIFICATIONS: 'TOGGLE_SHOW_NOTIFICATIONS',
  TOGGLE_SHOW_PROFILE_OPTIONS: 'TOGGLE_SHOW_PROFILE_OPTIONS'
};

export const actionCreators = {
  toggle_show_notifications() {
    return { type: actions.TOGGLE_SHOW_NOTIFICATIONS };
  },
  toggle_show_profile_options() {
    return { type: actions.TOGGLE_SHOW_PROFILE_OPTIONS };
  }
};
