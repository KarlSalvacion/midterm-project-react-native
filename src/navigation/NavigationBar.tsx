import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import stylesNavBar from '../styles/styles-navigation/StylesTabNavigation';
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
        tabBarButton: ({ accessibilityState, onPress }) => {
          const focused = accessibilityState?.selected;

          return (
            <Pressable
              onPress={onPress}
              style={({ pressed }) => [
                stylesNavBar.buttonContainer,
                pressed && stylesNavBar.pressable,
              ]}
            >
              <View style={stylesNavBar.iconContainer}>
                {route.name === "Home" ? (
                  <Ionicons
                    name={focused ? "home" : "home-outline"}
                    style={[
                      stylesNavBar.icon,
                      focused && stylesNavBar.activeIcon,
                      isDarkMode && stylesNavBar.darkIcon,
                      isDarkMode && focused && stylesNavBar.darkActiveIcon,
                    ]}
                  />
                ) : route.name === "Saved" ? (
                  <Ionicons
                    name={focused ? "bookmark" : "bookmark-outline"}
                    style={[
                      stylesNavBar.icon,
                      focused && stylesNavBar.activeIcon,
                      isDarkMode && stylesNavBar.darkIcon,
                      isDarkMode && focused && stylesNavBar.darkActiveIcon,
                    ]}
                  />
                ) : (
                  <Ionicons
                    name={focused ? "briefcase" : "briefcase-outline"}
                    style={[
                      stylesNavBar.icon,
                      focused && stylesNavBar.activeIcon,
                      isDarkMode && stylesNavBar.darkIcon,
                      isDarkMode && focused && stylesNavBar.darkActiveIcon,
                    ]}
                  />
                )}
              </View>
              <Text
                style={[
                  stylesNavBar.label,
                  focused && stylesNavBar.activeLabel,
                  isDarkMode && stylesNavBar.darkLabel,
                  focused && isDarkMode && stylesNavBar.darkActiveLabel,
                ]}
              >
                {route.name}
              </Text>
            </Pressable>
          );
        },
        tabBarLabel: () => null, 
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