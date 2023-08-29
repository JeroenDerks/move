import prisma from "@/lib/prisma";
import { UserTags } from "../UserTags";

export default async function Table({
  showAddModal,
}: {
  showAddModal: boolean;
}) {
  const users = await prisma.users.findMany({
    include: {
      tags: true,
    },
  });

  return users.map((user) => (
    <UserTags key={user.id} {...{ showAddModal, user }} />
  ));
}
