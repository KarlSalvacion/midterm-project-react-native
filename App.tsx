import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import stylesGlobal from "./styles-components/StylesGlobal";
import HomeScreen from "./screens/HomeScreen";
import { SavedJobsProvider } from "./context/SavedJobsContext";

const App: React.FC = () => {
  return (
    <SavedJobsProvider>
      <SafeAreaView style={stylesGlobal.container}>
        <StatusBar barStyle="default" translucent />
        <HomeScreen />
      </SafeAreaView>
    </SavedJobsProvider>
  );
};

export default App;
