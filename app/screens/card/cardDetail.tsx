import {useNavigation} from '@react-navigation/native';
import React from 'react';
// Modules
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../../components/Header';
// Redux
import {CardState} from '../../modules/card/reducer';
// CardDetail
const CardDetail = () => {
  const navigation = useNavigation();
  // Redux State
  const selectedCard = useSelector(
    (state: {card: CardState}) => state.card.selectedCard,
  );
  const detailData = [
    {key: 'name', label: 'Name'},
    {key: 'cardSet', label: 'Card Set'},
    {key: 'locale', label: 'Locale'},
    {key: 'playerClass', label: 'Player Class'},
    {key: 'text', label: 'Text'},
    {key: 'type', label: 'Type'},
    {key: 'attack', label: 'Attack'},
    {key: 'health', label: 'Health'},
    {key: 'faction', label: 'Faction'},
    {key: 'mechanics', label: 'Mechanics'},
  ];

  const goBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.safearea}>
      <Header label={selectedCard.name} handleLeftIcon={goBack} />
      <View style={styles.container}>
        {selectedCard.img && (
          <Image source={{uri: selectedCard.img}} style={styles.image} />
        )}
        {detailData.map(data =>
          data.key !== 'mechanics' ? (
            <Text key={data.key} style={styles.row}>
              <Text style={styles.label}>{`${data.label}:   `}</Text>
              <Text>{selectedCard[data.key]}</Text>
            </Text>
          ) : (
            <>
              <Text
                style={[
                  styles.label,
                  {lineHeight: 30},
                ]}>{`${data.label}:   `}</Text>
              {selectedCard.mechanics?.map(value => (
                <Text key={value.name}>{value.name}</Text>
              ))}
            </>
          ),
        )}
      </View>
    </SafeAreaView>
  );
};

export default CardDetail;

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
  row: {lineHeight: 30},
  label: {
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
    resizeMode: 'contain',
  },
});
