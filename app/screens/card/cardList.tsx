import React, {useEffect, useState} from 'react';
// Modules
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
// Redux
import {CardState} from '../../modules/card/reducer';
import {getAllCardsApiRequest} from '../../modules/card/actionCreators';
// Components
import {ActivityIndicator} from '../../components';
import CardItem from './cardItem';
import Header from '../../components/Header';
// Constants
const ITEM_HEIGHT = 40;
// CardList
const CardList = ({navigation}) => {
  const dispatch = useDispatch();
  // Redux State
  const _allCards = useSelector(
    (state: {card: CardState}) => state.card.allCards,
  );
  // State
  const [allCards, setAllCards] = useState<Array<object>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getAllCardsApiRequest()).then(() => {
      let common = [];
      Object.keys(_allCards).map(key => {
        common = [...common, ..._allCards[key]];
      });
      setLoading(false);
      setAllCards(common);
    });
  }, []);

  return (
    <SafeAreaView style={styles.safearea}>
      <Header label="Cards" />
      <View style={styles.container}>
        {!loading ? (
          <FlatList
            data={allCards}
            renderItem={({item}) => (
              <CardItem item={item} ITEM_HEIGHT={ITEM_HEIGHT} />
            )}
            initialNumToRender={15}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.cardId}
            getItemLayout={(data, index) => ({
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
              index,
            })}
          />
        ) : (
          <ActivityIndicator />
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
  container: {padding: 25, justifyContent: 'center', backgroundColor: 'white'},
});
