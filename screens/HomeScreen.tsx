import React, { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, ActivityIndicator, RefreshControl, TextInput } from "react-native";
import { fetchJobs } from "../services/ApiServices";
import { Job } from "../types/JobTypes";
import stylesHome from "../styles-components/StyleHome";
import JobItem from "../components/JobItems";

const HomeScreen: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async (): Promise<void> => {
    setLoading(true);
    const jobData = await fetchJobs();
    setJobs(jobData);
    setFilteredJobs(jobData);
    setLoading(false);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadJobs();
    setRefreshing(false);
  }, []);

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <View style={stylesHome.homeContainer}>
      <View style={stylesHome.topContainer}>
        <Text style={stylesHome.title}>JOB APP</Text>
      </View>

      <View style={stylesHome.mainContainer}>
        <TextInput
          style={stylesHome.searchBar}
          placeholder="Search jobs..."
          value={searchText}
          onChangeText={handleSearch}
        />

        {loading ? (
          <ActivityIndicator size="large" color="blue" />
        ) : (
            <FlatList
                data={filteredJobs}
                keyExtractor={(item) => item.id}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                renderItem={({ item }) => <JobItem job={item} />}
            />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
