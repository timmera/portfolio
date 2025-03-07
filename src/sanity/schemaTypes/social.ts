import { DocumentTextIcon } from '@sanity/icons';
import { defineType } from 'sanity';

export const social = defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Platform name',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    },
  ],
});
