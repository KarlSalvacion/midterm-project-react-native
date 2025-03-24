export interface Job {
    id: string;
    title: string;
    description: string;
    mainCategory: string;
    applicationLink: string;
    pubDate: string;
    expiryDate: string;
    company: {
      name: string;
      logo: string;
    };
    jobType: string;
    workModel: string;
    seniorityLevel: string;
    salary: {
      min: number;
      max: number;
    };
    locations: string[];
    tags: string[];
  }
  