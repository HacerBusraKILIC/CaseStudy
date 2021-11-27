import * as actionTypes from './actionTypes';

// Actions
export const setAllCards = ({allCard = []}: {allCard: Array<object>}) => ({
  type: actionTypes.ALL_CARDS,
  payload: allCard,
});

export const setSelectedCard = ({card = {}}: {card: object}) => ({
  type: actionTypes.SELECTED_CARD,
  payload: card,
});
