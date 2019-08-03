// if you want to show initial data :)
// const INITIAL_DATA =  [
//     {
//         id: 0,
//         text: 'Walk the Dog',
//     },
//     {
//         id:1,
//         text: 'learn Redux',

//     },
// ];

import { ADD_TODO, REMOVE_TODO, UNDO_TODO, REDO_TODO } from './actions'

const INITIAL_DATA = {
  past: [],
  todos: [],
  future: []
};

const TodoReducer = (state=INITIAL_DATA, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        past: [
          ...state.past, state.todos],
        todos: [
              ...state.todos, {
                  id: action.id,
                  text: action.text
              }
          ],
        future: []
      };
    case REMOVE_TODO:
      const numIndex = parseInt(action.id);
      return {
        past: [
          ...state.past, state.todos],
        todos: state.todos.filter(todo => todo.id !== numIndex),
        future: []
      };
    case UNDO_TODO:
      if(state.past.length <= 0) { // End of past
        return state;
      } else {
        const move = state.past.pop();
        return {
          past: [...state.past],
          todos: move,
          future: [
            ...state.future, state.todos
          ]
        }
      };
    case REDO_TODO:
      if(state.future.length <= 0) { // End of past
        return state;
      } else {
        const move = state.future.pop();
        return {
          past: [...state.past, state.todos],
          todos: move,
          future: [...state.future]
        }
      };
    default:
      return state;
  }
}

export default TodoReducer;
