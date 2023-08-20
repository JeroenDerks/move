"use client";

import { Tag } from "@/types/Tag";

import { TagContainer, StyledLink } from "./styled";
import { Typography } from "../Typography";
import { User } from "@/types/User";
import { UilPen } from "@iconscout/react-unicons";
import { UilTrash } from "@iconscout/react-unicons";

export const UserTag = ({ user, tag }: { user: User; tag: Tag }) => {
  return (
    <TagContainer>
      <Typography>{tag.title}</Typography>
      <StyledLink href={`/edit-tag?tagId=${tag.id}&userId=${user.id}`}>
        <UilPen />
      </StyledLink>
      <StyledLink href={`/delete-tag?tagId=${tag.id}`}>
        <UilTrash />
      </StyledLink>
    </TagContainer>
  );
};
