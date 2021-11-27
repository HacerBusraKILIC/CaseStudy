import {axiosClient} from '../axios';
import {setAllCards} from './action';

export function getAllCardsApiRequest() {
  return async dispatch => {
    axiosClient
      .get('cards')
      .then(response => {
        dispatch(setAllCards({allCard: response.data}));
      })
      .catch(err => console.log('getAllCardsApiRequest', err));
  };
}
