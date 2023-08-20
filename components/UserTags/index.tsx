"use client";

import { User } from "@/types/User";
import Link from "next/link";

import { Heading } from "../Heading";
import { UserTag } from "../UserTag";
import { Container } from "./styled";

export const UserTags = ({ user }: { user: User }) => {
  return (
    <>
      <Container>
        <Heading variant="h4">{user.name}</Heading>
        <Link href={`add-tag?user=${user.id}`}>Add tag</Link>
      </Container>
      {user.tags.map((tag) => (
        <UserTag key={tag.id} {...{ tag, user }} />
      ))}
    </>
  );
};
