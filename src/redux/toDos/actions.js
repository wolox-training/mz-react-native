export const actions = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO_COMPLETE: 'MARK_TODO_AS_DONE'
};

export const actionCreators = {
  toggleToDoComplete(id) {
    return { type: 'MARK_TODO_AS_DONE', id };
  }
};
