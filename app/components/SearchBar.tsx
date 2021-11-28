import React, {Dispatch, SetStateAction} from 'react';
// Modules
import {
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
  Text,
  TouchableOpacity,
} from 'react-native';
// interface
interface ISearchBar {
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  onSearch: () => void;
  onClear?: () => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
}

// SearchBar
const SearchBar = ({
  value,
  onChangeText,
  onSearch,
  onClear,
  placeholder,
  containerStyle,
}: ISearchBar) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
      <TouchableOpacity style={styles.clearButton} onPress={onClear}>
        <Text style={styles.clear}>X</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textButton} onPress={onSearch}>
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
    height: 30,
    fontSize: 12,
    paddingLeft: 10,
    paddingVertical: 0,
  },
  text: {
    lineHeight: 30,
    textAlign: 'center',
    paddingHorizontal: 7,
    color: 'white',
  },
  clear: {color: 'gray'},
  textButton: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'gray',
  },
  clearButton: {paddingRight: 5},
});
