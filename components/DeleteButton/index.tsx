"use server";

import { Tag } from "@/types/Tag";
import prisma from "../../lib/prisma";

export const DeleteButton = ({ tag }: { tag: Tag }) => {
  const handleDelete = async () => {
    await prisma.tag.delete({ where: { id: tag.id } });
  };

  return <button onClick={handleDelete}>delete</button>;
};
