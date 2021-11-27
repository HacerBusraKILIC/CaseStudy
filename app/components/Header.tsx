/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// Modules
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextStyle,
  Pressable,
  Image,
} from 'react-native';
// Theme
import {Dimension} from '../theme/Variables';
// Interface
interface HeaderProps {
  label?: string;
  labelStyle?: TextStyle;
  handleLeftIcon?: () => void;
  barStyle?: 'light-content' | 'dark-content';
}
const Header = ({label, labelStyle, handleLeftIcon, barStyle}: HeaderProps) => {
  return (
    <>
      <StatusBar backgroundColor="gray" barStyle={barStyle} />
      <View style={[styles.headerStyle, {backgroundColor: 'gray'}]}>
        {handleLeftIcon && (
          <Pressable onPress={handleLeftIcon}>
            <Image
              source={require('../assets/left-chevron.png')}
              style={styles.backButton}
            />
          </Pressable>
        )}
        <Text
          style={[styles.headerTitleStyle, labelStyle, {color: 'white'}]}
          numberOfLines={1}>
          {label}
        </Text>
        {handleLeftIcon && <View style={{width: 25}} />}
      </View>
    </>
  );
};

Header.defaultProps = {barStyle: 'light-content'};
export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    width: Dimension.width,
    alignItems: 'center',
  },
  headerTitleStyle: {
    flex: 0.7,
    fontSize: 18,
    textAlign: 'center',
    overflow: 'hidden',
  },
  backButton: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
