import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Job } from "../types/JobTypes";
import stylesJobItems from "../styles-components/StyleJobItems";
import { Ionicons } from '@expo/vector-icons';
import { useSavedJobs } from "../context/SavedJobsContext";
import { useAppliedJobs } from "../context/AppliedJobsContext";
import ApplyModal from './ApplyModal';
import { ApplyFormValues } from './ApplyModal';

interface JobItemProps {
  job: Job;
  isDarkMode: boolean;
  onUnsave?: () => void;
}

const JobItem: React.FC<JobItemProps> = ({ job, isDarkMode, onUnsave }) => {
  const { savedJobs, saveJob, removeJob } = useSavedJobs();
  const { hasApplied, applyToJob } = useAppliedJobs();
  const [isPressed, setIsPressed] = useState(false);
  const isSalaryAvailable = job.salary.min > 0 && job.salary.max > 0;
  const isBookmarked = savedJobs.some(savedJob => savedJob.id === job.id);
  const [isApplyModalVisible, setIsApplyModalVisible] = useState(false);
  const isApplied = hasApplied(job.id);

  const handleBookmark = () => {
    if (isBookmarked) {
      removeJob(job.id);
      onUnsave?.();
    } else {
      saveJob(job);
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
            <Text style={[
              stylesJobItems.jobInfo,
              isDarkMode && stylesJobItems.darkJobInfo
            ]}>{job.jobType}</Text>
            
            <Text style={[
              stylesJobItems.dot,
              isDarkMode && stylesJobItems.darkDot
            ]}>•</Text>

            <Text style={[
              stylesJobItems.jobInfo,
              isDarkMode && stylesJobItems.darkJobInfo
            ]}>{job.workModel} Work</Text>
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
      />
    </View>
  );
};

export default JobItem;
