export const actions = {
  TOGGLE_TODO_COMPLETE: 'MARK_TODO_AS_DONE',
  DELETE_TODO: 'DELETE_TODO',
  CREATE_TODO: 'CREATE_TODO'
};

export const actionCreators = {
  toggleToDoComplete(id) {
    return { type: actions.TOGGLE_TODO_COMPLETE, id };
  },
  delete(id) {
    return { type: actions.DELETE_TODO, id };
  },
  createTodo(text) {
    return { type: actions.CREATE_TODO, text };
  }
};
