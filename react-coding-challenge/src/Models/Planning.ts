import { Skill } from "./Skills";

export interface Planning {
  id: number;
  originalId: string;
  talentId?: string;
  talentName?: string;
  talentGrade?: string;
  bookingGrade?: string;
  operatingUnit: string;
  officeCity?: string;
  officePostalCode: string;
  jobManagerName?: string;
  jobManagerId?: string;
  totalHours: number;
  startDate: Date;
  endDate: Date;
  clientName?: string;
  clientId: string;
  industry?: string;
  requiredSkills?: Skill[];
  optionalSkills?: Skill[];
  isUnassigned: boolean;
}
