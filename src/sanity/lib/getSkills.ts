import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';
import { Skill } from '../../../typings';

export const getSkills = async () => {
  try {
    const query = groq`*[_type == "skill"]`;
    const skills: Skill[] = await sanityClient.fetch(query);
    return skills;
  } catch (error) {
    console.log(error);
  }
};
