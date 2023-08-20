import prisma from "@/lib/prisma";
import { Container } from "./styled";
import { UserTags } from "../UserTags";

export default async function Table() {
  const users = await prisma.users.findMany({
    include: {
      tags: true,
    },
  });

  return (
    <Container>
      {users.map((user) => (
        <UserTags key={user.id} {...{ user }} />
      ))}
    </Container>
  );
}
