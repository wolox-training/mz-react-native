export const actions = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO_COMPLETE: 'MARK_TODO_AS_DONE',
  DELETE_TODO: 'DELETE_TODO'
};

export const actionCreators = {
  toggleToDoComplete(id) {
    return { type: actions.MARK_TODO_AS_DONE, id };
  },
  delete(id) {
    return { type: actions.DELETE_TODO, id };
  }
};
