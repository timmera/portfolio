import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const config = {
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  apiVersion: '2021-03-25',
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);

import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

export const urlFor = (source: Parameters<ImageUrlBuilder['image']>[0]) =>
  imageUrlBuilder(config).image(source);
