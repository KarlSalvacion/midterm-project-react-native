import axios from "axios";
import uuid from "react-native-uuid";
import { Job } from "../types/JobTypes";

export const fetchJobs = async (): Promise<Job[]> => {
  try {
    const response = await axios.get<{ jobs: any[] }>("https://empllo.com/api/v1");

    const formattedJobs: Job[] = response.data.jobs.map((job) => ({
      id: uuid.v4() as string, 
      title: job.title || "",
      description: job.description || "",
      mainCategory: job.mainCategory || "",
      applicationLink: job.applicationLink || "",
      pubDate: job.pubDate || "",
      expiryDate: job.expiryDate || "",
      company: {
        name: job.companyName || "Unknown Company",
        logo: job.companyLogo || "",
      },
      jobType: job.jobType || "",
      workModel: job.workModel || "",
      seniorityLevel: job.seniorityLevel || "",
      salary: {
        min: job.minSalary || "0",
        max: job.maxSalary || "0",
      },
      locations: job.locations || [],
      tags: job.tags || [],
    }));

    return formattedJobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};
