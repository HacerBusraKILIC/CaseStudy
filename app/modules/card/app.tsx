// Action Types

const SET_ERROR_MESSAGE = 'app/SET_ERROR_MESSAGE';
const SET_SUCCESS_MESSAGE = 'app/SET_SUCCESS_MESSAGE';
// Actions
export const setErrorMessage = (message: string) => ({
  type: SET_ERROR_MESSAGE,
  payload: message,
});
export const setSuccessMessage = (message: string) => ({
  type: SET_SUCCESS_MESSAGE,
  payload: message,
});
// State
export interface AppState {
  layout: {
    measures: {header: number};
  };
  messages: {error: string; success: string};
}
const initialState: AppState = {
  layout: {
    measures: {header: 55},
  },
  messages: {error: '', success: ''},
};
// Reducer
export default (state = initialState, action: any): AppState => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return {...state, messages: {...state.messages, error: action.payload}};
    case SET_SUCCESS_MESSAGE:
      return {...state, messages: {...state.messages, success: action.payload}};
    default:
      return state;
  }
};
