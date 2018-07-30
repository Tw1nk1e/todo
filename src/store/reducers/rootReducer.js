const initialState = [];

const rootReducer = (state = initialState, action) => {

switch (action.type) {
  case 'ADD_NOTE':
    return [
        ...state, {
            title: action.payload,
            id: ++state.length,
            time: new Date()
        }
    ]
  ;
    case 'DELETE_NOTE':
    return state.filter((el, index) => {
      return index !== action.payload})
    ;
  }
  return state;
}

export default rootReducer;
