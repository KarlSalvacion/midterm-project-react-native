import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./context/ThemeContext";
import { SavedJobsProvider } from "./context/SavedJobsContext";
import { AppliedJobsProvider } from "./context/AppliedJobsContext";
import NavigationBar from './navigation/NavigationBar';
import stylesGlobal from "./styles/styles-screens/StylesGlobal";
import { useTheme } from "./context/ThemeContext";

const AppContent: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <SafeAreaView style={[stylesGlobal.container, isDarkMode && stylesGlobal.darkContainer]}>
      <NavigationContainer>
        <StatusBar barStyle="light-content"/>
        <NavigationBar />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <SavedJobsProvider>
        <AppliedJobsProvider>
          <AppContent />
        </AppliedJobsProvider>
      </SavedJobsProvider>
    </ThemeProvider>
  );
}
