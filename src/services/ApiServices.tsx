import axios from "axios";
import uuid from "react-native-uuid";
import { Job } from "../types/JobTypes";

export const fetchJobs = async (): Promise<Job[]> => {
  try {
    const response = await axios.get<{ jobs: any[] }>("https://empllo.com/api/v1");

    const formattedJobs: Job[] = response.data.jobs.map((job) => {
      const minSalary = typeof job.minSalary === "number" ? job.minSalary : 0;
      const maxSalary = typeof job.maxSalary === "number" ? job.maxSalary : 0;

      return {
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
        salary: { min: minSalary, max: maxSalary },
        locations: job.locations || [],
        tags: job.tags || [],
      };
    });

    return formattedJobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return []; 
  }
};
