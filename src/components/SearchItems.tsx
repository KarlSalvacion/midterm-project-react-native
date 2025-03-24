import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  TextInput, 
  Pressable,
  Animated
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import stylesSearch from '../styles-components/StyleSearchItems';

interface SearchItemsProps {
  isDarkMode: boolean;
  onSearch: (text: string) => void;
  searchText?: string;
}

const SearchItems: React.FC<SearchItemsProps> = ({ isDarkMode, onSearch, searchText: externalSearchText }) => {
  const [searchText, setSearchText] = useState<string>(externalSearchText || '');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (searchText.length > 0) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 110,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [searchText]);

  const handleSearch = (text: string) => {
    const normalizedText = text.replace(/\s+/g, ' ').trim();
    setSearchText(text);
    onSearch(normalizedText);
  };

  const handleClearSearch = () => {
    setSearchText('');
    onSearch('');
  };

  return (
    <View style={stylesSearch.searchContainer}>
      <View style={stylesSearch.searchInputContainer}>
        <TextInput
          style={[
            stylesSearch.searchBar,
            isDarkMode && stylesSearch.darkSearchBar,
            isFocused && (isDarkMode ? stylesSearch.darkSearchBarFocused : stylesSearch.searchBarFocused),
          ]}
          placeholder="Search jobs"
          placeholderTextColor={isDarkMode ? "rgb(102, 102, 102)" : "rgb(153, 153, 153)"}
          value={searchText}
          onChangeText={handleSearch}
          returnKeyType="search"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          selectionColor={isDarkMode ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"}
        />
        <View style={stylesSearch.iconsContainer}>
          {searchText.length > 0 && (
            <Pressable 
              style={stylesSearch.clearButton}
              onPress={handleClearSearch}
            >
              <Animated.View style={{ opacity: fadeAnim }}>
                <Ionicons 
                  name="close-circle" 
                  size={20} 
                  color={isDarkMode ? "rgb(102, 102, 102)" : "rgb(153, 153, 153)"} 
                />
              </Animated.View>
            </Pressable>
          )}
          <Pressable style={stylesSearch.searchButton}>
            <Ionicons name="search" size={20} color={isDarkMode ? "rgb(255, 255, 255)" : "rgb(20, 71, 142)"} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SearchItems; 