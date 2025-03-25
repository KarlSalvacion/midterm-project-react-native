import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Job } from "../types/JobTypes";
import stylesJobItems from "../styles/styles-components/StylesJobItems";
import { Ionicons } from '@expo/vector-icons';
import { useSavedJobs } from "../context/SavedJobsContext";
import { useAppliedJobs } from "../context/AppliedJobsContext";
import ApplyModal from '../modals/ApplyModal';
import { ApplyFormValues } from '../modals/ApplyModal';
import BookmarkModal from '../modals/BookmarkModal';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigationTypes";

interface JobItemProps {
  job: Job;
  isDarkMode: boolean;
  onUnsave?: () => void;
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const JobItem: React.FC<JobItemProps> = ({ job, isDarkMode, onUnsave, navigation }) => {
  const { savedJobs, saveJob, removeJob } = useSavedJobs();
  const { hasApplied, applyToJob } = useAppliedJobs();
  const [isPressed, setIsPressed] = useState(false);
  const isSalaryAvailable = job.salary.min > 0 && job.salary.max > 0;
  const isBookmarked = savedJobs.some(savedJob => savedJob.id === job.id);
  const [isApplyModalVisible, setIsApplyModalVisible] = useState(false);
  const isApplied = hasApplied(job.id);
  const [showBookmarkModal, setShowBookmarkModal] = useState(false);

  const handleBookmark = () => {
    if (isBookmarked) {
      removeJob(job.id);
      onUnsave?.();
    } else {
      saveJob(job);
      setShowBookmarkModal(true);
    }
  };

  const handleApply = () => {
    if (!isApplied) {
      setIsApplyModalVisible(true);
    }
  };

  const handleSubmitApplication = (values: ApplyFormValues) => {
    applyToJob(job, values);
    setIsApplyModalVisible(false);
  };

  const getJobTypeIcon = () => {
    switch (job.jobType) {
      case 'Full-Time':
        return 'briefcase';
      case 'Internship':
        return 'school';
      case 'Part-Time':
        return 'time';
      default:
        return 'briefcase';
    }
  };

  const getWorkModelIcon = () => {
    switch (job.workModel) {
      case 'On-site':
        return 'business';
      case 'Hybrid':
        return 'sync';
      case 'Remote':
        return 'home';
      default:
        return 'briefcase';
    }
  };

  return (
    <View style={[
      stylesJobItems.mainContainer,
      isDarkMode && stylesJobItems.darkMainContainer
    ]}>
      <View style={stylesJobItems.contentContainer}>
        <Image 
          source={{ uri: job.company.logo }} 
          style={stylesJobItems.logo}
          resizeMode="contain"
        />
        <View style={stylesJobItems.detailsContainer}>
          <View style={stylesJobItems.headerContainer}>
            <View style={stylesJobItems.titleContainer}>
              <Text numberOfLines={2} style={[
                stylesJobItems.title,
                isDarkMode && stylesJobItems.darkTitle
              ]}>
                {job.title}
              </Text>
              <Text numberOfLines={1} style={[
                stylesJobItems.company,
                isDarkMode && stylesJobItems.darkCompany
              ]}>
                {job.company.name}
              </Text>
            </View>
          </View>
          
          <View style={stylesJobItems.jobInfoContainer}>
            <View style={stylesJobItems.jobTypeContainer}>
              <Ionicons 
                name={getJobTypeIcon()} 
                style={isDarkMode ? stylesJobItems.darkIcon : stylesJobItems.icon}
              />
              <Text style={[
                stylesJobItems.jobInfo,
                isDarkMode && stylesJobItems.darkJobInfo
              ]}>{job.jobType}</Text>
            </View>
            <View style={stylesJobItems.workModelContainer}>
              <Ionicons 
                  name={getWorkModelIcon()} 
                  style={isDarkMode ? stylesJobItems.darkIcon : stylesJobItems.icon}
                />
                
                <Text style={[
                  stylesJobItems.jobInfo,
                  isDarkMode && stylesJobItems.darkJobInfo
                ]}>{job.workModel}</Text>
              </View>
            </View>

            <Text style={[
                  stylesJobItems.salary,
                  isDarkMode && stylesJobItems.darkSalary
                ]}>
                  {isSalaryAvailable 
                    ? `₱${job.salary.min.toLocaleString()} - ₱${job.salary.max.toLocaleString()}`
                    : "Salary: TBD"}
            </Text>

            
        </View>
        <View style={stylesJobItems.buttonContainer}>
          <Pressable 
              style={[
                stylesJobItems.bookmarkButton,
              ]}
              onPress={handleBookmark}
            >
              <Ionicons 
                name={isBookmarked ? "bookmark" : "bookmark-outline"} 
                size={30} 
                color={isBookmarked 
                  ? "rgb(226, 187, 31)" 
                  : isDarkMode 
                    ? "rgb(203, 203, 203)" 
                    : "rgb(102, 102, 102)"} 
              />
            </Pressable>
            <Pressable 
              style={[
                stylesJobItems.applyButton,
                isPressed && !isApplied && stylesJobItems.buttonPressed,
                isDarkMode && stylesJobItems.darkApplyButton,
                isApplied && stylesJobItems.appliedButton,
                isApplied && isDarkMode && stylesJobItems.darkAppliedButton
              ]}
              onPress={handleApply}
              onPressIn={() => !isApplied && setIsPressed(true)}
              onPressOut={() => !isApplied && setIsPressed(false)}
              disabled={isApplied}
            >
              <View style={stylesJobItems.applyButtonContent}>
                {isApplied && (
                  <Ionicons 
                    name="checkmark-circle" 
                    size={16} 
                    color="rgb(255, 255, 255)" 
                    style={stylesJobItems.checkIcon}
                  />
                )}
                <Text style={[
                  stylesJobItems.applyButtonText,
                  isDarkMode && stylesJobItems.darkButtonText,
                  isApplied && stylesJobItems.appliedButtonText
                ]}>{isApplied ? 'Applied' : 'Apply'}</Text>
              </View>
            </Pressable>
        </View>
      </View>
      <ApplyModal
        visible={isApplyModalVisible}
        onClose={() => setIsApplyModalVisible(false)}
        jobTitle={job.title}
        companyName={job.company.name}
        isDarkMode={isDarkMode}
        onSubmit={handleSubmitApplication}
        navigation={navigation}
      />
      <BookmarkModal
        visible={showBookmarkModal}
        isDarkMode={isDarkMode}
        isBookmarked={!isBookmarked}
        onClose={() => setShowBookmarkModal(false)}
      />
    </View>
  );
};

export default JobItem;
