import data from '../../resume.json';

export interface ResumeLocation {
  city: string;
  region: string;
  countryCode: string;
}

export interface ResumeProfile {
  network: string;
  username: string;
  url: string;
}

export interface ResumeBasics {
  name: string;
  label: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: ResumeLocation;
  profiles: ResumeProfile[];
}

export interface ResumeWork {
  name: string;
  position: string;
  alternance?: boolean;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights: string[];
  keywords: string[];
}

export interface ResumeEducation {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
}

export interface ResumeSkill {
  name: string;
  keywords: string[];
}

export interface ResumeVolunteer {
  organization: string;
  position: string;
  startDate: string;
  summary: string;
}

export interface ResumeInterest {
  name: string;
}

export interface ResumeLanguage {
  language: string;
  fluency: string;
}

export interface Resume {
  basics: ResumeBasics;
  work: ResumeWork[];
  education: ResumeEducation[];
  skills: ResumeSkill[];
  volunteer: ResumeVolunteer[];
  interests: ResumeInterest[];
  languages: ResumeLanguage[];
}

export const resume = data as Resume;
export default resume;
