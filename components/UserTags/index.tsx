"use client";

import { User } from "@/types/User";
import { UilPlus } from "@iconscout/react-unicons";

import { Heading } from "../Heading";
import { UserTag } from "../UserTag";
import { Container, TagsContainer, StyledLink } from "./styled";
import { Typography } from "../Typography";

export const UserTags = ({ user }: { user: User }) => {
  return (
    <>
      <Container>
        <Heading variant="h4">{user.name}</Heading>
        <StyledLink href={`add-tag?user=${user.id}`}>
          <UilPlus />
          Add tag
        </StyledLink>
      </Container>
      <TagsContainer>
        {user.tags.map((tag) => (
          <UserTag key={tag.id} {...{ user, tag }} />
        ))}
        {user.tags.length === 0 && <Typography>No tags available</Typography>}
      </TagsContainer>
    </>
  );
};
