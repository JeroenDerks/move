"use client";

import { Tag } from "@/types/Tag";
import { User } from "@/types/User";

import { TagContainer } from "./styled";
import { Typography } from "../Typography";
import Link from "next/link";

export const UserTag = ({ user, tag }: { user: User; tag: Tag }) => {
  return (
    <TagContainer>
      <Typography>{tag.title}</Typography>
      <Link href={`/delete-tag?tagId=${tag.id}`}>x</Link>
    </TagContainer>
  );
};
