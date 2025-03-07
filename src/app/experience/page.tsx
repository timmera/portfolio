import Header from '@/components/Header';
import { Experience } from '@/../../typings';

import { getExperience } from '@/sanity/lib/getExperience';

export default async function Page() {
  const experiences: Experience[] = (await getExperience()) || [];

  return (
    <>
      <Header />
      <section id="projects" className="snap-center">
        <h1 className="text-8xl">Experience</h1>
        <div>
          {experiences?.map((experience) => (
            <div key={experience._id}>
              <h2>{experience?.company}</h2>

              <p className="text-sm/6">{experience?.dateStarted}</p>
              <p className="text-sm/6">{experience?.dateEnded}</p>
              <p className="text-sm/6">{experience?.jobTitle}</p>
              <p className="text-sm/6">{experience?.isCurrentlyWorkingHere}</p>
              <p className="text-sm/6">{experience?.points}</p>
              <ul>
                {experience.technologies?.map((tech) => (
                  <li key={tech._id}>{tech.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
