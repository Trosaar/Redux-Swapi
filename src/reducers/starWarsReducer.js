import { PENDING, SUCCES, FAIL } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PENDING:
      return {
        ...state,
        fetching:true
      }
    case SUCCES:
      const newPeeps = action.payload.results
      return {
        ...state,
        characters: newPeeps,
        fetching: false
      }
    case FAIL:
      return {
        ...state,
        characters: action.payload.data,
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
