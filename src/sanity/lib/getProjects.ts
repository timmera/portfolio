import { groq } from 'next-sanity';
import { sanityClient } from '@/../sanity';
import { Project } from '@/../typings';

export const getProjects = async () => {
  try {
    const query = groq`*[_type == 'project'] {
  ...,
  technologies[]-> 
}`;
    const projects: Project[] = await sanityClient.fetch(query);
    return projects;
  } catch (error) {
    console.log(error);
  }
};
