import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('pageInfo').title('PageInfo'),
      S.documentTypeListItem('experience').title('Experience'),
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('skill').title('Skills'),
      S.documentTypeListItem('social').title('Social'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !['pageInfo', 'experience', 'project', 'skill', 'social'].includes(
            item.getId()!
          )
      ),
    ]);
