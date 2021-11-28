import {axiosClient} from '../axios';
import {setAllCards} from './action';

export function getAllCardsApiRequest() {
  return async (dispatch: any) => {
    await axiosClient
      .get('cards')
      .then(response => {
        dispatch(setAllCards({allCard: response.data}));
      })
      .catch(err => console.log('getAllCardsApiRequest', err));
  };
}

export function cardsSearchApiRequest({name = ''}: {name: string}) {
  return async (dispatch: any) => {
    await axiosClient
      .get(`cards/search/${name}`)
      .then(response => {
        dispatch(setAllCards({allCard: response.data}));
      })
      .catch(err => console.log('cardsSearchApiRequest', err));
  };
}
