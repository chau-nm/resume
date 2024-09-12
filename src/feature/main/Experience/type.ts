export type ExperienceSectionStepType = {
  dotTitle: string;
  content: string | React.ReactNode;
}

export type ExperienceSectionType = {
  title: String;
  stepData: ExperienceSectionStepType[]
}