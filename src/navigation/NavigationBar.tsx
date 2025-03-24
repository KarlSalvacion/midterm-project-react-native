import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import stylesNavBar from '../styles-components/StyleTabNavigation';
import { useTheme } from '../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SavedJobsScreen from '../screens/SavedJobsScreen';
import AppliedJobsScreen from '../screens/AppliedJobsScreen';

const Tab = createBottomTabNavigator();

const NavigationBar: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: [
          stylesNavBar.mainContainer,
          isDarkMode && stylesNavBar.darkMainContainer
        ],
        tabBarIcon: ({ focused }) => (
          <View style={[
            stylesNavBar.iconContainer,
            
          ]}>
            {route.name === "Home" ? (
              <Ionicons name={focused ? "home" : "home-outline"} style={[stylesNavBar.icon, focused && stylesNavBar.activeIcon, isDarkMode && stylesNavBar.darkActiveIcon]} />
            ) : route.name === "Saved" ? (
              <Ionicons name={focused ? "bookmark" : "bookmark-outline"} style={[stylesNavBar.icon, focused && stylesNavBar.activeIcon, isDarkMode && stylesNavBar.darkActiveIcon]} />
            ) : (
              <Ionicons name={focused ? "briefcase" : "briefcase-outline"} style={[stylesNavBar.icon, focused && stylesNavBar.activeIcon, isDarkMode && stylesNavBar.darkActiveIcon]} />
            )}
          </View>
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={[
            stylesNavBar.label,
            focused && stylesNavBar.activeLabel,
            isDarkMode && stylesNavBar.darkLabel,
            focused && isDarkMode && stylesNavBar.darkActiveLabel
          ]}>
            {route.name}
          </Text>
        ),
        
        tabBarLabelInactiveTintColor: isDarkMode ? "rgb(153, 153, 153)" : "rgb(102, 102, 102)",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Saved" component={SavedJobsScreen} />
      <Tab.Screen name="Applied" component={AppliedJobsScreen} />
    </Tab.Navigator>
  );
};

export default NavigationBar;

