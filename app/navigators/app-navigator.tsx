import React from 'react';
// Modules
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
// Screens
import {CardStackNavigator} from '../screens/card';
// Theme
import AppStyles from '../theme/Layout';
import {Colors} from '../theme/Variables';
// // Redux
// import {UserState} from '../modules/user/reducers';
// import {logout} from '../modules/user/actions';

export type NavigatorParamList = {
  card: undefined;
};

const Stack = createNativeStackNavigator<NavigatorParamList>();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'card'}>
      <Stack.Screen name="card" component={CardStackNavigator} />
    </Stack.Navigator>
  );
};

export const AppNavigator = React.forwardRef<
  NavigationContainerRef<any>,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <SafeAreaProvider
      style={AppStyles.fill}
      initialMetrics={initialWindowMetrics}>
      <NavigationContainer {...props} ref={ref}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={Colors.gray_extra_light}
        />
        <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
});

AppNavigator.displayName = 'AppNavigator';
