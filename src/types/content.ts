import { Asset, Entry } from 'contentful';

export interface WorkProject {
  name: string;
  slug: string;
  skills?: Array<string>;
  shortDescription?: any;
  description?: any;
  challenges?: any;
  approach?: any;
  lessons?: any;
  outcomes?: any;
}

export interface Employment {
  company: string;
  description?: any;
  jobTitle?: string;
  link?: string;
  slug?: string;
  skills?: Array<string>;
  startDate?: string;
  endDate?: string;

  logoLight?: Asset;
  logoDark?: Asset;

  projects?: Array<Entry<WorkProject>>;
}

export interface Project {
  name: string;
  order: number;
  description?: any;
  skills?: Array<string>;
  linkText?: string;
  link?: string;
  sourceLink?: string;

  image?: Asset;
}