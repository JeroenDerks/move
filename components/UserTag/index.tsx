"use client";

import { Tag } from "@/types/Tag";
import { User } from "@/types/User";
import { TagContainer } from "./styled";
import { Typography } from "../Typography";

export const UserTag = ({ user, tag }: { user: User; tag: Tag }) => (
  <TagContainer>
    <Typography margin="0">{tag.title}</Typography>
  </TagContainer>
);
