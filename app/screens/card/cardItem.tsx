import React from 'react';
// Modules
import {Pressable, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// interface
interface ICardItem {
  item: object;
  ITEM_HEIGHT: number;
}
const CardItem = ({item, ITEM_HEIGHT}: ICardItem) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Pressable
      style={[styles.card, {height: ITEM_HEIGHT}]}
      onPress={() => {
        navigation.navigate('cardDetail');
      }}>
      <Text>{item.name}</Text>
    </Pressable>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  card: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
