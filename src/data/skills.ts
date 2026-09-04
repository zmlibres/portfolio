import type { Skill } from "../types/portfolio";

export const skills: Skill[] = [
  // Backend
  { name: "Java", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Kafka", category: "backend" },
  { name: "Event-Driven Systems", category: "backend" },
  { name: "Microservices", category: "backend" },

  // Database
  { name: "PostgreSQL", category: "database" },
  { name: "Redis", category: "database" },
  { name: "SQL", category: "database" },
  { name: "Data Modeling", category: "database" },

  // DevOps
  { name: "Docker", category: "devops" },
  { name: "Git", category: "devops" },
  { name: "CI/CD", category: "devops" },
  { name: "Linux", category: "devops" },

  // Tools
  { name: "SonarQube", category: "tools" },
  { name: "Maven", category: "tools" },
  { name: "JUnit", category: "tools" },
  { name: "Mockito", category: "tools" },
];
