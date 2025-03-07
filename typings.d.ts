interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  email: string;
  name: string;
  heroImage: Image;
}

export interface Technology extends SanityBody {
  _type: 'skill';
  title: string;
  progress: number;
  image: Image;
}

export interface Skill extends SanityBody {
  _type: 'skill';
  title: string;
  image: Image;
}

export interface Experience extends SanityBody {
  _type: 'experience';
  jobTitle: string;
  companyImage: Image;
  company: string;
  dateStarted: string;
  dateEnded: string;
  isCurrentlyWorkingHere: boolean;
  technologies: Technology[];
  points: string[];
}

export interface Project extends SanityBody {
  title: string;
  image: Image;
  _type: 'project';
  summary: string;
  technologies: Technology[];
  linkToBuild: string;
}

export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}
