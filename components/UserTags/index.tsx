"use client";

import { User } from "@/types/User";
import { UilPlus } from "@iconscout/react-unicons";

import { Heading } from "../Heading";
import { UserTag } from "../UserTag";
import { Container, TagsContainer } from "./styled";
import { Typography } from "../Typography";
import { theme } from "@/theme";
import { IconButton } from "../IconButton";

export const UserTags = ({ user }: { user: User }) => {
  return (
    <>
      <Container>
        <Heading variant="h4">{user.name}</Heading>
        <IconButton href={`add-tag?user=${user.id}`}>
          <UilPlus size="1rem" color={theme.colors.black} />
        </IconButton>
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
