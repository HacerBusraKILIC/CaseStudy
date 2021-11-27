// Action Types
import {ALL_CARDS, SELECTED_CARD} from './actionTypes';
// State
export interface CardState {
  allCards: object;
  selectedCard: object;
}
const initialState: CardState = {
  allCards: [],
  selectedCard: {},
};
// Reducer
export default (state = initialState, action: any): CardState => {
  switch (action.type) {
    case ALL_CARDS:
      return {...state, allCards: action.payload};
    default:
      return state;
  }
};
