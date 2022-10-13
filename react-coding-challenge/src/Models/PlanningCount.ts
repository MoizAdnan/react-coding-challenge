export interface AttributeCount {
  key: string;
  value: number;
}

export interface PlanningCount {
  gradingCount: AttributeCount[];
  industryCount: AttributeCount[];
  officeCityCount: AttributeCount[];
  skillsCount: AttributeCount[];
}
