import React, { createContext, useState, useMemo, useEffect } from 'react';
import * as contentful from 'contentful';

import { ContentTypes } from 'types/enums';
import { Employment, Project } from 'types/content';

/**
 * IContentContext
 */
export interface IContentContext {
  isLoading: boolean;
  isEmploymentError: boolean;
  isProjectsError: boolean;
  employmentEntries?: Array<contentful.Entry<Employment>>;
  projectEntries?: Array<contentful.Entry<Project>>;
}

/**
 * ContentContext.
 *
 * @description Handles maintaining site content.
 */
export const ContentContext = createContext<IContentContext>({} as IContentContext);

const ContentContextProvider: React.FC = ({ children }) => {
  const [isLoadingEmployment, setIsLoadingEmployment] = useState<boolean>(true);
  const [isEmploymentError, setIsEmploymentError] = useState<boolean>(false);
  const [employmentEntries, setEmploymentEntries] = useState<Array<contentful.Entry<Employment>>>();

  const [isLoadingProjects, setIsLoadingProjects] = useState<boolean>(true);
  const [isProjectsError, setIsProjectsError] = useState<boolean>(false);
  const [projectEntries, setProjectEntries] = useState<Array<contentful.Entry<Project>>>();

  /**
   * Setup Contentful API client.
   */
  const contentfulClient = useMemo(() => {
    return contentful.createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY
    });
  }, []);

  /**
   * Get list of Employment entries from Contentful.
   */
  const getEmploymentEntries = async () => {
    try {
      setIsLoadingEmployment(true);
      setIsEmploymentError(false);

      // Retrieve employment entries
      const employmentEntries = await contentfulClient.getEntries<Employment>({
        content_type: ContentTypes.Employment
      });

      // Store returned employment records
      setEmploymentEntries(employmentEntries?.items);
      setIsLoadingEmployment(false);
    }
    catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to retrieve employment history');
      setIsEmploymentError(true);
    }
  };

  /**
   * Get list of Project entries from Contentful.
   */
  const getProjectEntries = async () => {
    try {
      setIsLoadingProjects(true);
      setIsProjectsError(false);

      // Retrieve project entries
      const projectEntries = await contentfulClient.getEntries<Project>({
        content_type: ContentTypes.Project
      });

      // Store returned project records
      setProjectEntries(projectEntries?.items);
      setIsLoadingProjects(false);
    }
    catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to retrieve projects');
      setIsProjectsError(true);
    }
  };

  useEffect(() => {
    if (!contentfulClient) {
      return;
    }

    getEmploymentEntries();
    getProjectEntries();
  }, [contentfulClient]);

  console.log(isEmploymentError);

  return (
    <ContentContext.Provider
      value={{
        isLoading: isLoadingEmployment || isLoadingProjects,
        isEmploymentError,
        isProjectsError,
        employmentEntries,
        projectEntries
      }}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentContextProvider;