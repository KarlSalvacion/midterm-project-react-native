import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Job } from "../types/JobTypes";

interface SavedJobsContextType {
  savedJobs: Job[];
  saveJob: (job: Job) => void;
  removeJob: (jobId: string) => void;
}

const SavedJobsContext = createContext<SavedJobsContextType | undefined>(undefined);

interface SavedJobsProviderProps {
  children: ReactNode;
}

export const SavedJobsProvider: React.FC<SavedJobsProviderProps> = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);

  // Load saved jobs from AsyncStorage on initialization
  useEffect(() => {
    const loadSavedJobs = async () => {
      try {
        const storedJobs = await AsyncStorage.getItem("savedJobs");
        if (storedJobs) {
          setSavedJobs(JSON.parse(storedJobs));
        }
      } catch (error) {
        console.error("Failed to load saved jobs from AsyncStorage:", error);
      }
    };

    loadSavedJobs();
  }, []);

  // Save jobs to AsyncStorage whenever the savedJobs state changes
  useEffect(() => {
    const saveJobsToStorage = async () => {
      try {
        await AsyncStorage.setItem("savedJobs", JSON.stringify(savedJobs));
      } catch (error) {
        console.error("Failed to save jobs to AsyncStorage:", error);
      }
    };

    saveJobsToStorage();
  }, [savedJobs]);

  const saveJob = (job: Job) => {
    if (!savedJobs.some((saved) => saved.id === job.id)) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  const removeJob = (jobId: string) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== jobId));
  };

  return (
    <SavedJobsContext.Provider value={{ savedJobs, saveJob, removeJob }}>
      {children}
    </SavedJobsContext.Provider>
  );
};

export const useSavedJobs = (): SavedJobsContextType => {
  const context = useContext(SavedJobsContext);
  if (!context) {
    throw new Error("useSavedJobs must be used within a SavedJobsProvider");
  }
  return context;
};