import { groq } from 'next-sanity';
import { sanityClient } from '@/../sanity';
import { Project } from '@/../typings';
import type { GetStaticProps } from 'next';

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

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
    revalidate: 20,
  };
};
