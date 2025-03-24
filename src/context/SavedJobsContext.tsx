import React, { createContext, useContext, useState, ReactNode } from "react";
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

    const saveJob = (job: Job) => {
        if (!savedJobs.some((saved) => saved.id === job.id)) {
            setSavedJobs([...savedJobs, job]);
        }
    };

    const removeJob = (jobId: string) => {
        setSavedJobs(savedJobs.filter(job => job.id !== jobId));
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
