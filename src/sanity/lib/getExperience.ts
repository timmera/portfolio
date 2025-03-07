import { groq } from 'next-sanity';
import { sanityClient } from '@/../sanity';
import { Experience } from '@/../typings';

export const getExperience = async () => {
  try {
    const query = groq`*[_type == 'experience'] {
  ...,
  technologies[]-> 
}`;
    const experiences: Experience[] = await sanityClient.fetch(query);
    return experiences;
  } catch (error) {
    console.log(error);
  }
};
