import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Job } from '../types/JobTypes';
import { ApplyFormValues } from '../modals/ApplyModal';

interface AppliedJob {
  job: Job;
  application: ApplyFormValues;
  appliedAt: string;
}

interface AppliedJobsContextType {
  appliedJobs: AppliedJob[];
  applyToJob: (job: Job, application: ApplyFormValues) => void;
  hasApplied: (jobId: string) => boolean;
  cancelApplication: (jobId: string) => void;
}

const AppliedJobsContext = createContext<AppliedJobsContextType | undefined>(undefined);

export const useAppliedJobs = () => {
  const context = useContext(AppliedJobsContext);
  if (!context) {
    throw new Error('useAppliedJobs must be used within an AppliedJobsProvider');
  }
  return context;
};

export const AppliedJobsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appliedJobs, setAppliedJobs] = useState<AppliedJob[]>([]);

  useEffect(() => {
    loadAppliedJobs();
  }, []);

  const loadAppliedJobs = async () => {
    try {
      const storedJobs = await AsyncStorage.getItem('appliedJobs');
      if (storedJobs) {
        setAppliedJobs(JSON.parse(storedJobs));
      }
    } catch (error) {
      console.error('Error loading applied jobs:', error);
    }
  };

  const saveAppliedJobs = async (jobs: AppliedJob[]) => {
    try {
      await AsyncStorage.setItem('appliedJobs', JSON.stringify(jobs));
    } catch (error) {
      console.error('Error saving applied jobs:', error);
    }
  };

  const applyToJob = (job: Job, application: ApplyFormValues) => {
    const newAppliedJob: AppliedJob = {
      job,
      application,
      appliedAt: new Date().toISOString(),
    };
    
    const updatedJobs = [...appliedJobs, newAppliedJob];
    setAppliedJobs(updatedJobs);
    saveAppliedJobs(updatedJobs);
  };

  const hasApplied = (jobId: string) => {
    return appliedJobs.some(appliedJob => appliedJob.job.id === jobId);
  };

  const cancelApplication = (jobId: string) => {
    const updatedJobs = appliedJobs.filter(appliedJob => appliedJob.job.id !== jobId);
    setAppliedJobs(updatedJobs);
    saveAppliedJobs(updatedJobs);
  };

  return (
    <AppliedJobsContext.Provider value={{ appliedJobs, applyToJob, hasApplied, cancelApplication }}>
      {children}
    </AppliedJobsContext.Provider>
  );
}; 