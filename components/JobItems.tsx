import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Job } from "../types/JobTypes";
import stylesJobItems from "../styles-components/StyleJobItems";

interface JobItemProps {
  job: Job;
}

const JobItem: React.FC<JobItemProps> = ({ job }) => {
  return (
    <View style={stylesJobItems.container}>
      <Image source={{ uri: job.company.logo }} style={stylesJobItems.logo} />
      <View>
        <Text style={stylesJobItems.title}>{job.title}</Text>
        <Text style={stylesJobItems.company}>{job.company.name}</Text>
        <Text style={stylesJobItems.salary}>
          {job.salary.min} - {job.salary.max}
        </Text>
      </View>
    </View>
  );
};

export default JobItem;
