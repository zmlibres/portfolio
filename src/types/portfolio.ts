export interface Project {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  featured?: boolean;
  image?: string;
  github?: string;
  liveUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  category: "backend" | "frontend" | "database" | "devops" | "tools";
}
