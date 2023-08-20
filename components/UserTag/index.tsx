"use client";

import { Tag } from "@/types/Tag";

import { TagContainer } from "./styled";
import { Typography } from "../Typography";
import Link from "next/link";
import { User } from "@/types/User";

export const UserTag = ({ user, tag }: { user: User; tag: Tag }) => {
  return (
    <TagContainer>
      <Typography>{tag.title}</Typography>
      <Link href={`/edit-tag?tagId=${tag.id}&userId=${user.id}`}>edit</Link>
      <Link href={`/delete-tag?tagId=${tag.id}`}>x</Link>
    </TagContainer>
  );
};
