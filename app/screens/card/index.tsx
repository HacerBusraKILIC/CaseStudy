import React from 'react';
// Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardList from './cardList';
import CardDetail from './cardDetail';

export type CardNavigatorParamList = {
  cardList: undefined;
  cardDetail: undefined;
};

const CardStack = createNativeStackNavigator<CardNavigatorParamList>();

export const CardStackNavigator = () => {
  return (
    <CardStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <CardStack.Screen name="cardList" component={CardList} />
      <CardStack.Screen name="cardDetail" component={CardDetail} />
    </CardStack.Navigator>
  );
};
