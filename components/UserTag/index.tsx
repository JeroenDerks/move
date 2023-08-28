"use client";

import Link from "next/link";
import { UilPen } from "@iconscout/react-unicons";
import { UilTrash } from "@iconscout/react-unicons";

import { Tag } from "@/types/Tag";
import { TagContainer, NoWrapTypography } from "./styled";
import { User } from "@/types/User";
import { theme } from "@/theme";

export const UserTag = ({ user, tag }: { user: User; tag: Tag }) => {
  return (
    <TagContainer>
      <NoWrapTypography>{tag.title}</NoWrapTypography>
      <Link href={`/edit-tag?tagId=${tag.id}&userId=${user.id}`}>
        <UilPen color={theme.colors.black} size="1.125rem" />
      </Link>
      <Link href={`/delete-tag?tagId=${tag.id}`}>
        <UilTrash color={theme.colors.black} size="1.125rem" />
      </Link>
    </TagContainer>
  );
};
