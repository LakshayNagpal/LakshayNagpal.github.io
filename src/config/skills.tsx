import React from "react";

import { ReactComponent as FolderFunctionsIcon } from "~/assets/icons/folder-functions-open.svg";
import { ReactComponent as JSIcon } from "~/assets/icons/javascript.svg";
import { ReactComponent as TSIcon } from "~/assets/icons/typescript.svg";
import { ReactComponent as CSharpIcon } from "~/assets/icons/csharp.svg";
import { ReactComponent as CoffeeScriptIcon } from "~/assets/icons/coffeescript.svg";

import { ReactComponent as FolderClientIcon } from "~/assets/icons/folder-client-open.svg";
import { ReactComponent as ReactIcon } from "~/assets/icons/react_ts.svg";
import { ReactComponent as ReduxIcon } from "~/assets/icons/redux-store.svg";
import { ReactComponent as MaterialUiIcon } from "~/assets/icons/material-ui.svg";
import { ReactComponent as HtmlIcon } from "~/assets/icons/html.svg";
import { ReactComponent as CssIcon } from "~/assets/icons/css.svg";
import { ReactComponent as SassIcon } from "~/assets/icons/sass.svg";
import { ReactComponent as JssIcon } from "~/assets/icons/jss.svg";
import { ReactComponent as GatsbyIcon } from "~/assets/icons/gatsby.svg";
import { ReactComponent as GraphqlIcon } from "~/assets/icons/graphql.svg";
import { ReactComponent as NetlifyIcon } from "~/assets/icons/netlify.svg";
import { ReactComponent as StorybookIcon } from "~/assets/icons/storybook.svg";
import { ReactComponent as AngularIcon } from "~/assets/icons/angular.svg";

import { ReactComponent as FolderServerIcon } from "~/assets/icons/folder-server-open.svg";
import { ReactComponent as NodeJsIcon } from "~/assets/icons/nodejs.svg";
import { ReactComponent as NestJsIcon } from "~/assets/icons/nestjs.svg";
import { ReactComponent as ExpressIcon } from "~/assets/icons/expressjs.svg";
import { ReactComponent as FastifyIcon } from "~/assets/icons/fastify.svg";
import { ReactComponent as SocketIoIcon } from "~/assets/icons/socket-io.svg";
import { ReactComponent as MongoDBIcon } from "~/assets/icons/mongodb.svg";
import { ReactComponent as RedisIcon } from "~/assets/icons/redis.svg";
import { ReactComponent as PostgreSqlIcon } from "~/assets/icons/postgresql.svg";
import { ReactComponent as AWSIcon } from "~/assets/icons/aws.svg";
import { ReactComponent as DockerIcon } from "~/assets/icons/docker.svg";
import { ReactComponent as KubernetesIcon } from "~/assets/icons/kubernetes.svg";

import { ReactComponent as FolderToolsIcon } from "~/assets/icons/folder-tools-open.svg";
import { ReactComponent as GitIcon } from "~/assets/icons/git.svg";
import { ReactComponent as GitlabIcon } from "~/assets/icons/gitlab.svg";
import { ReactComponent as JestIcon } from "~/assets/icons/jest.svg";
import { ReactComponent as CypressIcon } from "~/assets/icons/cypress.svg";
import { ReactComponent as SentryIcon } from "~/assets/icons/sentry.svg";
import { ReactComponent as WebpackIcon } from "~/assets/icons/webpack.svg";
import { ReactComponent as I18nIcon } from "~/assets/icons/i18n.svg";
import { ReactComponent as VsCodeIcon } from "~/assets/icons/vscode.svg";
import { ReactComponent as WebStormIcon } from "~/assets/icons/webstorm.svg";

import { ReactComponent as FolderDocsIcon } from "~/assets/icons/folder-docs-open.svg";
import { ReactComponent as ReadmeIcon } from "~/assets/icons/readme.svg";

import { ReactComponent as ABTesting } from "~/assets/icons/ABTesting.svg";
import { ReactComponent as Agile } from "~/assets/icons/Agile.svg";
import { ReactComponent as B2C } from "~/assets/icons/B2C.svg";
import { ReactComponent as CompetitiveAnalysis } from "~/assets/icons/CompetitiveAnalysis.svg";
import { ReactComponent as CustomerCentric } from "~/assets/icons/CustomerCentric.svg";
import { ReactComponent as DataAnalysis } from "~/assets/icons/DataAnalysis.svg";
import { ReactComponent as DataDriven } from "~/assets/icons/DataDriven.svg";
import { ReactComponent as DesignPattern } from "~/assets/icons/DesignPattern.svg";
import { ReactComponent as GIT } from "~/assets/icons/GIT.svg";
import { ReactComponent as Healthcare } from "~/assets/icons/Healthcare.svg";
import { ReactComponent as MarketResearch } from "~/assets/icons/MarketResearch.svg";
import { ReactComponent as PRD } from "~/assets/icons/PRD.svg";
import { ReactComponent as Prioritization } from "~/assets/icons/Prioritization.svg";
import { ReactComponent as ProductRoadmap } from "~/assets/icons/ProductRoadmap.svg";
import { ReactComponent as Programmer } from "~/assets/icons/Programmer.svg";
import { ReactComponent as StoryTelling } from "~/assets/icons/StoryTelling.svg";
import { ReactComponent as UX } from "~/assets/icons/UX.svg";

import { ReactComponent as Telecom } from "~/assets/icons/Telecom.svg";
import { ReactComponent as Azure } from "~/assets/icons/Azure.svg";
import { ReactComponent as Ecommerce } from "~/assets/icons/Ecommerce.svg";
import { ReactComponent as B2B } from "~/assets/icons/B2B.svg";
import { ReactComponent as Figma } from "~/assets/icons/Figma.svg";
import { ReactComponent as Sketch } from "~/assets/icons/Sketch.svg";
import { ReactComponent as Jupyter } from "~/assets/icons/Jupyter.svg";
import { ReactComponent as Python } from "~/assets/icons/Python.svg";
import { ReactComponent as CPlusPlus } from "~/assets/icons/CPlusPlus.svg";
import { ReactComponent as Javascript } from "~/assets/icons/Javascript.svg";
import { ReactComponent as Java } from "~/assets/icons/Java.svg";
import { ReactComponent as DataScience } from "~/assets/icons/DataScience.svg";

interface SkillCategoryBase<Id = string> {
  id: Id;
  name: React.ReactNode;
  icon: SvgComponent;
}

const skillCategories = (<T extends any>(t: readonly SkillCategoryBase<T>[]) =>
  t)([
  {
    id: "Skills",
    name: "Skills",
    icon: FolderFunctionsIcon,
  },
  {
    id: "Domains",
    name: "Domains",
    icon: FolderClientIcon,
  },
  {
    id: "Tools",
    name: "Tools",
    icon: FolderToolsIcon,
  },
  {
    id: "Languages",
    name: "Languages",
    icon: FolderFunctionsIcon,
  },
  {
    id: "Knowledge",
    name: "Knowledge",
    icon: FolderDocsIcon,
  },
] as const);

export type SkillCategoryId = typeof skillCategories[number]["id"];

export type SkillCategory = SkillCategoryBase<SkillCategoryId>;

export type SkillCategoriesMap = { [key in SkillCategoryId]: SkillCategory };

export const SKILL_CATEGORIES: Readonly<SkillCategory[]> = skillCategories;

export const SKILL_CATEGORIES_MAP = skillCategories.reduce(
  (res: Partial<SkillCategoriesMap>, category) => {
    res[category.id] = category;
    return res;
  },
  {}
) as SkillCategoriesMap;

interface SkillBase<Id = string> {
  id: Id;
  categoryId: SkillCategoryId;
  hint?: React.ReactNode;
  icon: SvgComponent;
  name: string;
}

const skills = (<T extends any>(t: readonly SkillBase<T>[]) => t)([
  // Skills
  {
    id: "MarketResearch",
    categoryId: "Skills",
    name: "Market Research",
    icon: MarketResearch,
  },
  {
    id: "ProductRoadmap",
    categoryId: "Skills",
    name: "Product Roadmap",
    icon: ProductRoadmap,
  },
  {
    id: "PRD",
    categoryId: "Skills",
    name: "Product Requirement Document",
    icon: PRD,
  },
  {
    id: "DataDriven",
    categoryId: "Skills",
    name: "Data Driven",
    icon: DataDriven,
  },
  {
    id: "CustomerCentric",
    categoryId: "Skills",
    name: "Customer Centric",
    icon: CustomerCentric,
  },
  {
    id: "Prioritization",
    categoryId: "Skills",
    name: "Prioritization",
    icon: Prioritization,
  },
  {
    id: "CompetitiveAnalysis",
    categoryId: "Skills",
    name: "Competitive Analysis",
    icon: CompetitiveAnalysis,
  },
  {
    id: "Agile",
    categoryId: "Skills",
    name: "Agile Methodology",
    icon: Agile,
  },
  {
    id: "StoryTelling",
    categoryId: "Skills",
    name: "Story Telling",
    icon: StoryTelling,
  },
  {
    id: "DataAnalysis",
    categoryId: "Skills",
    name: "Data Analysis",
    icon: DataAnalysis,
  },
  {
    id: "ABTesting",
    categoryId: "Skills",
    name: "AB Testing",
    icon: ABTesting,
  },
  {
    id: "Programmer",
    categoryId: "Skills",
    name: "Coder / Programmer",
    icon: Programmer,
  },
  // Domain
  {
    id: "B2C",
    categoryId: "Domains",
    name: "B2C",
    icon: B2C,
  },
  {
    id: "Healthcare",
    categoryId: "Domains",
    name: "Healthcare",
    hint: "(NGO)",
    icon: Healthcare,
  },
  {
    id: "Telecom",
    categoryId: "Domains",
    name: "Telecom",
    icon: Telecom,
  },
  {
    id: "Azure",
    categoryId: "Domains",
    name: "Cloud Services - Azure",
    icon: Azure,
  },
  {
    id: "Ecommerce",
    categoryId: "Domains",
    name: "E-Commerce",
    icon: Ecommerce,
  },
  {
    id: "B2B",
    categoryId: "Domains",
    name: "B2B",
    icon: B2B,
  },
  // Tools
  {
    id: "GIT",
    categoryId: "Tools",
    name: "GIT",
    icon: GIT,
  },
  {
    id: "Figma",
    categoryId: "Tools",
    name: "Figma",
    icon: Figma,
  },
  {
    id: "Sketch",
    categoryId: "Tools",
    name: "Sketch",
    icon: Sketch,
  },
  {
    id: "Jupyter",
    categoryId: "Tools",
    name: "Jupyter Notebooks",
    icon: Jupyter,
  },
  // Languages
  {
    id: "Python",
    categoryId: "Languages",
    name: "Python",
    icon: Python,
  },
  {
    id: "CPlusPlus",
    categoryId: "Tools",
    name: "C++",
    icon: CPlusPlus,
  },
  {
    id: "Javascript",
    categoryId: "Tools",
    name: "Javascript",
    icon: Javascript,
  },
  {
    id: "Java",
    categoryId: "Tools",
    name: "Java",
    icon: Java,
  },

  // Knowledge

  {
    id: "UX",
    categoryId: "Knowledge",
    name: "UX",
    icon: UX,
  },
  {
    id: "DataScience",
    categoryId: "Knowledge",
    name: "Data Science",
    icon: DataScience,
  },
  {
    id: "DesignPattern",
    categoryId: "Knowledge",
    name: "Design Patterns",
    icon: DesignPattern,
  },
] as const);

export type SkillId = typeof skills[number]["id"];

export type Skill = SkillBase<SkillId>;

export type SkillsMap = { [key in SkillId]: Skill };

export const SKILLS: Readonly<Skill[]> = skills;

export const MAX_SKILL_NAME_LENGTH = Math.max(
  ...SKILLS.map((skill) => skill.name.length)
);

export const SKILLS_MAP = skills.reduce((res: Partial<SkillsMap>, skill) => {
  res[skill.id] = skill;
  return res;
}, {}) as SkillsMap;
