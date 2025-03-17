import Header from '@/components/Header';
import { Project } from '@/../../typings';
import { getProjects } from '@/sanity/lib/getProjects';
import { urlFor } from '../../sanity/lib/image';
import Image from 'next/image';
import type { GetStaticProps } from 'next';

export default async function Page() {
  const projects: Project[] = (await getProjects()) || [];

  return (
    <>
      <Header />
      <section id="projects" className="snap-center">
        <h1 className="text-8xl">Projects</h1>
        <div className="sticky top-0 p-5 flex flex-wrap items-start justify-between max-w-4xl mx-auto xl:items-center">
          {projects?.map((project) => (
            <div
              key={project._id}
              className="block mb-20 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <div key={project._id}>
                <h2>{project.title}</h2>
                <p className="text-sm/6">{project.summary}</p>
                <ul>
                  {project.technologies?.map((tech) => (
                    <li key={tech._id}>{tech.title}</li>
                  ))}
                </ul>
                {project.image && (
                  <Image
                    src={urlFor(project.image).width(300).url()}
                    alt={project.title}
                    width={300}
                    height={300}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
    revalidate: 20,
  };
};
