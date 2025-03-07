import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

if (
  !process.env.SANITY_STUDIO_DATASET ||
  !process.env.SANITY_STUDIO_PROJECT_ID
) {
  throw new Error(
    'Missing SANITY_STUDIO_DATASET or SANITY_STUDIO_PROJECT_ID environment variables'
  );
}

export const config = {
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 't4s3mk7z',
  apiVersion: '2021-03-25',
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);

import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

export const urlFor = (source: Parameters<ImageUrlBuilder['image']>[0]) =>
  imageUrlBuilder(config).image(source);
