import { ExperienceId } from "./experience";
import { SkillId } from "./skills";

export type SkillUsage = { id: SkillId; experienceInMonths: number };

export interface JobSkills {
  experienceId: ExperienceId;
  skills: (SkillId | SkillUsage)[];
}

export const SKILLS_USAGE: JobSkills[] = [
  {
    experienceId: "Microsoft",
    skills: [
      "MarketResearch",
      "ProductRoadmap",
      "PRD",
      "DataDriven",
      "CustomerCentric",
      "Prioritization",
      "CompetitiveAnalysis",
      "Agile",
      "StoryTelling",
      "DataAnalysis",
      { id: "UX", experienceInMonths: 6 },
      { id: "ABTesting", experienceInMonths: 6 },
      "B2C",
      "Azure",
      "B2B",
      { id: "Figma", experienceInMonths: 6 },
      { id: "Python", experienceInMonths: 9 },
    ],
  },
  {
    experienceId: "Airtel",
    skills: [
      "Programmer",
      "DataScience",
      "DataDriven",
      { id: "StoryTelling", experienceInMonths: 12 },
      "DataAnalysis",
      { id: "DesignPattern", experienceInMonths: 15 },
      "B2C",
      "Telecom",
      "Python",
      "Jupyter",
    ],
  },
  {
    experienceId: "Freelancer",
    skills: [
      "Healthcare",
      { id: "Ecommerce", experienceInMonths: 6 },
      "GIT",
      { id: "Sketch", experienceInMonths: 20 },
      { id: "UX", experienceInMonths: 10 },
    ],
  },
];

export const CONTINUOUSLY_LEARNING_SKILLS: {
  [key in SkillId]?: { dateFrom?: Date; learningTimeRatio?: number };
} = {
  // CSSinJS: { learningTimeRatio: 0.3 },
  // DesignPatterns: { learningTimeRatio: 0.7 },
  // Docker: { learningTimeRatio: 0.2 },
  // Git: {},
  // HTML: { learningTimeRatio: 0.2 },
  // Jest: { learningTimeRatio: 0.5 },
  // MaterialUI: { learningTimeRatio: 0.2 },
  // MongoDB: { learningTimeRatio: 0.5 },
  // NestJS: { learningTimeRatio: 0.5 },
  // NodeJS: { learningTimeRatio: 0.5 },
  // OOP: {},
  // React: { learningTimeRatio: 0.5 },
  // SocketIO: { learningTimeRatio: 0.5 },
  // TDD: { learningTimeRatio: 0.5 },
  // TypeScript: {},
  // VSCode: {},
  // Webpack: { learningTimeRatio: 0.2 },
};
