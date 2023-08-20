"use client";

import { useState } from "react";
import { Tag } from "@/types/Tag";
import { User } from "@/types/User";

import { TagContainer } from "./styled";
import { Typography } from "../Typography";

export const UserTag = ({ user, tag }: { user: User; tag: Tag }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <TagContainer>
      <Typography>{tag.title}</Typography>
    </TagContainer>
  );
};
