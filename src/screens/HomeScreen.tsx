  import React, { useEffect, useState, useCallback, useRef } from "react";
  import { 
    View, 
    Text, 
    FlatList, 
    ActivityIndicator, 
    RefreshControl, 
    KeyboardAvoidingView,
    Platform,
    Pressable,
    Animated
  } from "react-native";
  import { Ionicons, AntDesign } from '@expo/vector-icons';
  import { fetchJobs } from "../services/ApiServices";
  import { Job } from "../types/JobTypes";
  import stylesHome from "../styles/styles-screens/StylesHome";
  import JobItem from "../components/JobItems";
  import { useTheme } from "../context/ThemeContext";
  import SearchItems from '../components/SearchItems';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
  import { RootStackParamList } from '../navigation/navigationTypes';
  import { useNavigation } from '@react-navigation/native';

  const ITEMS_PER_PAGE = 10;

  const HomeScreen: React.FC = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const flatListRef = useRef<FlatList>(null);
    const slideAnim = useRef(new Animated.Value(0)).current;
    const [isPressed, setIsPressed] = useState(false);
    const [jobs, setJobs] = useState<Job[]>([]);
    const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
    const [displayedJobs, setDisplayedJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchText, setSearchText] = useState<string>("");
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const scrollToTop = () => {
      flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
    };

    useEffect(() => {
      loadJobs();
    }, []);

    useEffect(() => {
      setCurrentPage(1);
      setHasMore(true);
      const initialJobs = filteredJobs.slice(0, ITEMS_PER_PAGE);
      setDisplayedJobs(initialJobs);
    }, [filteredJobs]);

    useEffect(() => {
      Animated.spring(slideAnim, {
        toValue: isDarkMode ? 1 : 0,
        useNativeDriver: true,
        tension: 50,
        friction: 7,
      }).start();
    }, [isDarkMode]);

    const loadJobs = async (): Promise<void> => {
      try {
        const jobData = await fetchJobs();
        setJobs(jobData);
        setFilteredJobs(jobData);
        setDisplayedJobs(jobData.slice(0, ITEMS_PER_PAGE));
      } catch (error) {
        console.error('Error loading jobs:', error);
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    };

    const onRefresh = useCallback(() => {
      setRefreshing(true);
      loadJobs();
    }, []);

    const handleSearch = (text: string) => {
      setSearchText(text);
      const filtered = text.trim()
        ? jobs.filter(job => 
          job.title.toLowerCase().includes(text.toLowerCase()) ||
          job.company.name.toLowerCase().includes(text.toLowerCase()) ||
          job.jobType.toLowerCase().includes(text.toLowerCase()) ||
          job.workModel.toLowerCase().includes(text.toLowerCase())
        )
        : jobs;
      setFilteredJobs(filtered);
    };

    const loadMoreJobs = () => {
      if (!hasMore || loading) return;

      const nextPage = currentPage + 1;
      const startIndex = currentPage * ITEMS_PER_PAGE;
      const endIndex = nextPage * ITEMS_PER_PAGE;
      
      const newJobs = filteredJobs.slice(startIndex, endIndex);
      setDisplayedJobs(prev => [...prev, ...newJobs]);
      setCurrentPage(nextPage);
      setHasMore(endIndex < filteredJobs.length);
    };

    const renderFooter = () => {
      if (!hasMore) return null;
      return (
        <View style={stylesHome.footerLoader}>
          <ActivityIndicator size="small" color="#007BFF" />
        </View>
      );
    };

    const handleThemeToggle = () => {
      setIsPressed(true);
      toggleTheme();
      setTimeout(() => setIsPressed(false), 200);
    };

    return (
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : undefined} 
        style={[
          stylesHome.homeContainer,
        ]}
      >
        <View style={[
          stylesHome.mainContent,
          isDarkMode && stylesHome.darkMainContent
        ]}>
          <View style={[
            stylesHome.headerContainer, 
            isDarkMode && stylesHome.darkHeaderContainer
          ]}>
            <Pressable 
              style={stylesHome.topContainer} 
              onPress={scrollToTop}
            >
              <Text style={[
                stylesHome.title,
                isDarkMode && stylesHome.darkTitle
              ]}>GoHire</Text>
              
              <Pressable 
                style={[
                  stylesHome.themeToggle,
                  isDarkMode && stylesHome.darkThemeToggle,
                  isPressed && { transform: [{ scale: 0.95 }] }
                ]}
                onPress={handleThemeToggle}
              >
                <Animated.View style={[
                  stylesHome.themeToggleButton,
                  isDarkMode && stylesHome.darkThemeToggleButton,
                  {
                    transform: [{
                      translateX: slideAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 30]
                      })
                    }]
                  }
                ]}>
                  <Ionicons 
                    name={isDarkMode ? "moon" : "sunny"} 
                    size={16} 
                    color={isDarkMode ? "rgb(0, 3, 51)" : "rgb(215, 137, 41)"} 
                  />
                </Animated.View>
              </Pressable>
            </Pressable>
            
            <SearchItems 
              isDarkMode={isDarkMode}
              onSearch={handleSearch}
              searchText={searchText}
            />
          </View>
          
          {loading && !refreshing ? (
            <ActivityIndicator size="large" color={isDarkMode ? "rgb(255, 215, 0)" : "rgb(0, 123, 255)"} />
          ) : (
            <FlatList 
              ref={flatListRef}
              data={displayedJobs}
              keyExtractor={(item) => item.id} 
              refreshControl={
                <RefreshControl 
                  refreshing={refreshing} 
                  onRefresh={onRefresh}
                  colors={[isDarkMode ? "rgb(255, 215, 0)" : "rgb(0, 123, 255)"]}
                  tintColor={isDarkMode ? "rgb(255, 215, 0)" : "rgb(0, 123, 255)"}
                />
              } 
              renderItem={({ item }) => <JobItem job={item} isDarkMode={isDarkMode} navigation={navigation} />}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={stylesHome.flatListContainer}
              onEndReached={loadMoreJobs}
              onEndReachedThreshold={0.5}
              ListFooterComponent={renderFooter}
              showsVerticalScrollIndicator={false}
              bounces={true}
              decelerationRate="normal"
              snapToInterval={1}
              snapToAlignment="start"
              ListEmptyComponent={() => (
                <View style={[
                  stylesHome.emptyContainer,
                  isDarkMode && stylesHome.darkEmptyContainer
                ]}>
                  <AntDesign 
                    name="frowno" 
                    style={[
                      stylesHome.emptyIcon,
                      isDarkMode && stylesHome.darkEmptyIcon
                    ]}
                  />
                  <Text style={[
                    stylesHome.emptyText,
                    isDarkMode && stylesHome.darkEmptyText
                  ]}>
                    {searchText.trim() 
                      ? "No jobs or companies matched your search."
                      : "No jobs available"}
                  </Text>
                </View>
              )}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    );
  };

  export default HomeScreen;
