"use client";

import { User } from "@/types/User";
import Link from "next/link";

import { Heading } from "../Heading";
import { UserTag } from "../UserTag";
import { Container } from "./styled";
import { Typography } from "../Typography";

export const UserTags = ({ user }: { user: User }) => {
  return (
    <>
      <Container>
        <Heading variant="h4">{user.name}</Heading>
        <Link href={`add-tag?user=${user.id}`}>Add tag</Link>
      </Container>
      {user.tags.map((tag) => (
        <UserTag key={tag.id} {...{ user, tag }} />
      ))}
      {user.tags.length === 0 && <Typography>No tags available</Typography>}
    </>
  );
};
