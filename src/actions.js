export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UNDO_TODO = 'UNDO_TODO';
export const REDO_TODO = 'REDO_TODO';

let TodoId = 2;

export const addTodo = text => ({
    type: ADD_TODO,
    id: TodoId++,
    text
});

export const deleteTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
});

export const undoTodo = () => ({
  type: UNDO_TODO
});

export const redoTodo = () => ({
  type: REDO_TODO
});
