import React from "react";

import { Fn, Sl } from "~/components/CodeLikeBlock";

export interface Company {
  name: string;
  description: React.ReactNode;
  link?: string;
}

export enum Position {
  DataScience = "Data Scientist",
  ProdMan = "Product Manager",
}

interface ExperienceBase<Id = string> {
  id: Id;
  company: Company;
  dateFrom: Date;
  dateTo?: Date;
  position: Position;
}

export const EXPERIENCE = (<T extends any>(t: readonly ExperienceBase<T>[]) =>
  t)([
  {
    id: "Microsoft",
    company: {
      name: "Microsoft",
      description: (
        <>
          <Fn>Managing Deployments in Azure (including chatGPT deployments)</Fn>{" "}
          - I am looking at the Planned Maintenance, Fleet Completion and the
          Azure Update Management Tool area which keeps the VMs running in Azure
          updated to the latest and greatest.
        </>
      ),
      link: "https://www.linkedin.com/company/microsoft/",
    },
    dateFrom: new Date(Date.UTC(2022, 4)),
    dateTo: new Date(Date.now()),
    position: Position.ProdMan,
  },
  {
    id: "Airtel",
    company: {
      name: "Airtel",
      description: (
        <>
          Designed a model to predict where the next airtel tower needs to be
          setup using
          <Fn>Semantic Segmentation & Greedy Algorithms</Fn> with precise
          latitude, longitude and angle to maximise the ARPU and area coverage
          for customers latched to the tower.
        </>
      ),
      link: "https://www.linkedin.com/company/airtel/",
    },
    dateFrom: new Date(Date.UTC(2017, 7)),
    dateTo: new Date(Date.UTC(2020, 6)),
    position: Position.DataScience,
  },
  {
    id: "Freelancer",
    company: {
      name: "Freelancer",
      description: (
        <>
          I mentor students in the areas of{" "}
          <Fn> Data Analysis, Product Management and Data Structures</Fn>
          and help them kickstart or refine their skills in the respective
          areas.
        </>
      ),
    },
    dateFrom: new Date(Date.UTC(2020, 0)),
    dateTo: new Date(Date.now()),
    position: Position.ProdMan,
  },
] as const);

export type ExperienceId = typeof EXPERIENCE[number]["id"];

export type Experience = ExperienceBase<ExperienceId>;

export const IS_HIRABLE = true; // !!EXPERIENCE[0].dateTo;
