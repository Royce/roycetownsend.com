/** @jsx jsx */
import { Link } from 'gatsby';
import { Badge, Box, jsx } from 'theme-ui';

export const TagList = function TagList({
  tags,
}: {
  tags: { name: string; slug: string }[];
}): JSX.Element {
  return (
    <Box my={2}>
      {tags.map((tag) => {
        return (
          <Link key={tag.slug} to={tag.slug} sx={{ mx: 1 }}>
            <Badge variant="tag">{tag.name}</Badge>
          </Link>
        );
      })}
    </Box>
  );
};
