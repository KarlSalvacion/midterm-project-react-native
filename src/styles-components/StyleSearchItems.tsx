import { StyleSheet } from 'react-native';

const stylesSearch = StyleSheet.create({
  searchContainer: {
    marginBottom: 0,
  },

  searchInputContainer: {
    position: 'relative',
  },

  searchBar: {
    height: 48,
    borderWidth: 1,
    borderColor: "rgb(221, 221, 221)",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingRight: 90,
    fontSize: 16,
    backgroundColor: 'rgb(255, 255, 255)',
    color: 'rgb(51, 51, 51)',
  },

  darkSearchBar: {
    backgroundColor: 'rgb(45, 45, 45)',
    borderColor: 'rgb(68, 68, 68)',
    color: 'rgb(255, 255, 255)',
  },

  searchBarFocused: {
    borderColor: " rgb(235, 184, 113)",
    borderWidth: 2,
  },

  darkSearchBarFocused: {
    borderColor: "rgb(255, 255, 255)",
  },

  iconsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    alignItems: 'center',
    paddingRight: 8,
  },

  clearButton: {
    padding: 8,
    marginRight: 4,
  },

  searchButton: {
    padding: 8,
  },
});

export default stylesSearch; 