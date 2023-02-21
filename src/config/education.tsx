interface EducationBase<Id = string> {
  id: Id;
  name: string;
  field: string;
  degree: string;
  grade: string;
  dateFrom: Date;
  dateTo?: Date;
}

export const EDUCATION = (<T extends any>(t: readonly EducationBase<T>[]) => t)(
  [
    {
      id: "University",
      name: `Indian Institute of Management (IIM) Calcutta`,
      field: "Product Management",
      degree: "MBA degree",
      grade: "6.3 (by the nine-point system)",
      dateFrom: new Date(Date.UTC(2020, 7)),
      dateTo: new Date(Date.UTC(2022, 2)),
    },
    {
      id: "College",
      name: `Delhi Technological University (Formerly Delhi College of Engineering)`,
      field: "Electrical Engineering",
      degree: "B.TECH",
      grade: "8.1 (by the ten-point system)",
      dateFrom: new Date(Date.UTC(2013, 7)),
      dateTo: new Date(Date.UTC(2017, 3)),
    },
  ] as const
);

export type EducationId = typeof EDUCATION[number]["id"];

export type Education = EducationBase<EducationId>;
