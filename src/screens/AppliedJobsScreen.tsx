import React, { useState } from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useAppliedJobs } from '../context/AppliedJobsContext';
import stylesAppliedJobs from '../styles/styles-screens/StylesAppliedJobs';
import { Ionicons } from '@expo/vector-icons';
import { Job } from '../types/JobTypes';
import { ApplyFormValues } from '../modals/ApplyModal';
import CancelApplicationModal from '../modals/CancelApplicationModal';
import NotifyCancelModal from '../modals/NotifyCancelModal';

interface AppliedJob {
  job: Job;
  application: ApplyFormValues;
  appliedAt: string;
}

const AppliedJobsScreen: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { appliedJobs, cancelApplication } = useAppliedJobs();
  const [modalVisible, setModalVisible] = useState(false);
  const [notifyModalVisible, setNotifyModalVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState<{ id: string; title: string } | null>(null);

  const handleCancelApplication = (jobId: string, jobTitle: string) => {
    setSelectedJob({ id: jobId, title: jobTitle });
    setModalVisible(true);
  };

  const handleConfirmCancel = () => {
    if (selectedJob) {
      cancelApplication(selectedJob.id);
      setNotifyModalVisible(true);
      setModalVisible(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const renderItem = ({ item }: { item: AppliedJob }) => (
    <View style={[
      stylesAppliedJobs.jobCard,
      isDarkMode && stylesAppliedJobs.darkJobCard
    ]}>
      <View style={stylesAppliedJobs.jobHeader}>
        <Image 
          source={{ uri: item.job.company.logo }} 
          style={stylesAppliedJobs.companyLogo}
          resizeMode="contain"
        />
        <View style={stylesAppliedJobs.jobInfo}>
          <Text style={[
            stylesAppliedJobs.jobTitle,
            isDarkMode && stylesAppliedJobs.darkText
          ]} numberOfLines={2}>
            {item.job.title}
          </Text>
          <Text style={[
            stylesAppliedJobs.companyName,
            isDarkMode && stylesAppliedJobs.darkSubText
          ]}>
            {item.job.company.name}
          </Text>
          <View style={stylesAppliedJobs.jobDetails}>
            <Text style={[
              stylesAppliedJobs.jobType,
              isDarkMode && stylesAppliedJobs.darkSubText
            ]}>
              {item.job.jobType} • {item.job.workModel}
            </Text>
            <Text style={[
              stylesAppliedJobs.appliedDate,
              isDarkMode && stylesAppliedJobs.darkSubText
            ]}>
              Applied on {formatDate(item.appliedAt)}
            </Text>
          </View>
        </View>
      </View>

      <View style={stylesAppliedJobs.applicationStatus}>
        <View style={stylesAppliedJobs.statusContainer}>
          <Text style={stylesAppliedJobs.statusText}>Under Review</Text>
        </View>
        <Pressable
          style={({ pressed }) => [
            stylesAppliedJobs.cancelButton,
            pressed && stylesAppliedJobs.buttonPressed
          ]}
          onPress={() => handleCancelApplication(item.job.id, item.job.title)}
        >
          <Ionicons name="close-circle" size={20} color="rgb(220, 38, 38)" />
          <Text style={stylesAppliedJobs.cancelButtonText}>Cancel Application</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={[
      stylesAppliedJobs.container,
      isDarkMode && stylesAppliedJobs.darkContainer
    ]}>
      <View style={[
        stylesAppliedJobs.headerContainer,
        isDarkMode && stylesAppliedJobs.darkHeaderContainer
      ]}>
        <Text style={[
          stylesAppliedJobs.title,
          isDarkMode && stylesAppliedJobs.darkTitle
        ]}>
          Applied Jobs
        </Text>
        <Text style={[
          stylesAppliedJobs.appliedJobsAmountText,
          isDarkMode && stylesAppliedJobs.darkAppliedJobsAmountText
        ]}>
          ({appliedJobs.length})
        </Text>
      </View>

      <FlatList
        data={appliedJobs}
        keyExtractor={(item) => item.job.id}
        renderItem={renderItem}
        contentContainerStyle={stylesAppliedJobs.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={stylesAppliedJobs.emptyContainer}>
            <Ionicons 
              name="document-text-outline" 
              size={48} 
              color={isDarkMode ? "rgb(75, 85, 99)" : "rgb(156, 163, 175)"}
              style={stylesAppliedJobs.emptyIcon}
            />
            <Text style={[
              stylesAppliedJobs.emptyText,
              isDarkMode && stylesAppliedJobs.darkEmptyText
            ]}>
              You haven't applied to any jobs yet
            </Text>
          </View>
        )}
      />

      <CancelApplicationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleConfirmCancel}
        jobTitle={selectedJob?.title || ''}
        isDarkMode={isDarkMode}
      />

      <NotifyCancelModal
        visible={notifyModalVisible}
        onClose={() => setNotifyModalVisible(false)}
        isDarkMode={isDarkMode}
        jobTitle={selectedJob?.title || ''}
      />
    </View>
  );
};

export default AppliedJobsScreen; 