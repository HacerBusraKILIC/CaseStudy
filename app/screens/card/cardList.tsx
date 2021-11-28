import React, {useEffect, useState} from 'react';
// Modules
import {FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
// Redux
import {CardState} from '../../modules/card/reducer';
import {
  cardsSearchApiRequest,
  getAllCardsApiRequest,
} from '../../modules/card/actionCreators';
// Components
import {ActivityIndicator, Header, SearchBar} from '../../components';
import CardItem from './cardItem';
// Constants
const ITEM_HEIGHT = 40;
// CardList
const CardList = () => {
  const dispatch = useDispatch();
  // Redux State
  const _allCards = useSelector(
    (state: {card: CardState}) => state.card.allCards,
  );
  // State
  const [allCards, setAllCards] = useState<Array<object>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

  const getData = () => {
    setLoading(true);
    dispatch(getAllCardsApiRequest()).then(() => {
      setLoading(false);
    });
  };

  const searchData = () => {
    if (searchText !== '') {
      setLoading(true);
      dispatch(cardsSearchApiRequest({name: searchText})).then(() => {
        setLoading(false);
      });
    }
  };

  const onClear = () => {
    setSearchText('');
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (_allCards.length !== 0) {
      if (searchText === '') {
        let common: Array<object> = [];
        Object.keys(_allCards).map(key => {
          common = [...common, ..._allCards[key]];
        });
        setAllCards(common);
      } else {
        setAllCards(_allCards);
      }
    }
  }, [_allCards]);

  return (
    <SafeAreaView style={styles.safearea}>
      <Header label="Cards" />
      <View style={styles.container}>
        <SearchBar
          onChangeText={setSearchText}
          onSearch={searchData}
          onClear={onClear}
          value={searchText}
          placeholder="Search a card..."
        />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={allCards}
            renderItem={({item}) => (
              <CardItem item={item} ITEM_HEIGHT={ITEM_HEIGHT} />
            )}
            initialNumToRender={15}
            showsVerticalScrollIndicator={false}
            refreshing={loading}
            onRefresh={getData}
            keyExtractor={item => item.cardId}
            getItemLayout={(data, index) => ({
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
              index,
            })}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default CardList;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: 'gray',
  },
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white',
  },
});
