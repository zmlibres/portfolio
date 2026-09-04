import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    number: "01",
    title: "Financial Event Processing",
    description:
      "Backend services for processing financial events using an event-driven architecture, with a focus on reliability, idempotency, and distributed processing.",
    technologies: [
      "Java",
      "Spring Boot",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    highlights: [
      "Built event-driven processing workflows using Kafka",
      "Implemented idempotent transaction processing",
      "Designed execution tracking and processing locks",
      "Investigated production issues involving Kafka consumers and memory usage",
    ],
    featured: true,
  },

  {
    number: "02",
    title: "Digital Check Deposit",
    description:
      "Backend services supporting digital check deposit workflows and integrations with downstream financial services.",
    technologies: ["Java", "Spring Boot", "Kafka", "REST APIs", "PostgreSQL"],
    highlights: [
      "Developed backend APIs and service integrations",
      "Implemented JWT validation and request security",
      "Worked with event-driven processing",
      "Improved configuration and credential management",
    ],
    featured: true,
  },

  {
    number: "03",
    title: "Event-Driven Service Platform",
    description:
      "A backend architecture focused on asynchronous processing, service-to-service communication, and operational reliability.",
    technologies: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker"],
    highlights: [
      "Designed asynchronous processing flows",
      "Worked with Kafka consumers and producers",
      "Implemented failure handling and retry strategies",
      "Improved application observability and troubleshooting",
    ],
  },
];
