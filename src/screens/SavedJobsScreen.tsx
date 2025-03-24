import React, { useState, useCallback, useRef } from 'react';
import { View, Text, FlatList, RefreshControl, Pressable } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import stylesSavedJobs from '../styles-components/StyleSavedJobs';
import { useSavedJobs } from '../context/SavedJobsContext';
import JobItem from '../components/JobItems';
import { Job } from '../types/JobTypes';
import UnsaveModal from '../components/UnsaveModal';

interface UnsaveMessage {
  jobId: string;
  jobTitle: string;
  job: Job;
}

const SavedJobsScreen: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { savedJobs, saveJob, removeJob } = useSavedJobs();
  const [unsaveMessage, setUnsaveMessage] = useState<UnsaveMessage | null>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const flatListRef = useRef<FlatList>(null);

  const handleUnsave = (jobId: string, jobTitle: string, job: Job) => {
    removeJob(jobId);
    setUnsaveMessage({ jobId, jobTitle, job });
  };

  const handleUndo = () => {
    if (unsaveMessage) {
      saveJob(unsaveMessage.job);
      setUnsaveMessage(null);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  return (
    <View style={[stylesSavedJobs.container, isDarkMode && stylesSavedJobs.darkContainer]}>
      <View style={[stylesSavedJobs.headerContainer, isDarkMode && stylesSavedJobs.darkHeaderContainer]}>
        <Pressable 
          style={[stylesSavedJobs.headerPressable, isDarkMode && stylesSavedJobs.darkHeaderContainer]}
          onPress={scrollToTop}
        >
          <Text 
            style={[stylesSavedJobs.title, isDarkMode && stylesSavedJobs.darkTitle]}
          >
            Saved Jobs
          </Text>
        </Pressable>
      </View>
        
      <FlatList
        ref={flatListRef}
        data={savedJobs}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={onRefresh}
            colors={[isDarkMode ? "rgb(255, 215, 0)" : "rgb(0, 123, 255)"]}
            tintColor={isDarkMode ? "rgb(255, 215, 0)" : "rgb(0, 123, 255)"}
          />
        }
        renderItem={({ item }) => (
          <JobItem 
            job={item} 
            isDarkMode={isDarkMode}
            onUnsave={() => handleUnsave(item.id, item.title, item)}
          />
        )}
        contentContainerStyle={stylesSavedJobs.listContainer}
        bounces={true}
        decelerationRate="normal"
        snapToInterval={1}
        snapToAlignment="start"
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={() => (
          <View style={stylesSavedJobs.emptyContainer}>
            <Text style={[stylesSavedJobs.emptyText, isDarkMode && stylesSavedJobs.darkEmptyText]}>
              No saved jobs yet
            </Text>
          </View>
        )}
      />
      <UnsaveModal
        visible={unsaveMessage !== null}
        jobTitle={unsaveMessage?.jobTitle || ''}
        onUndo={handleUndo}
        onClose={() => setUnsaveMessage(null)}
        isDarkMode={isDarkMode}
      />
    </View>
  );
};

export default SavedJobsScreen; 