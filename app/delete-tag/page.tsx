import { redirect } from "next/navigation";

import prisma from "../../lib/prisma";
import { Heading } from "@/components/Heading";
import { BackButton } from "@/components/BackButton";
import { ConfirmButton } from "@/components/ConfirmButton";
import { Typography } from "@/components/Typography";

export default async function AddTagPage({ searchParams }: AddTagPageProps) {
  const tag = await prisma.tag.findUnique({
    where: {
      id: searchParams?.tagId,
    },
  });

  const handleSubmit = async () => {
    "use server";
    await prisma.tag.delete({ where: { id: tag?.id } });

    redirect("/");
  };

  return (
    <>
      <BackButton />
      <Heading variant="h2">Delete tag</Heading>
      <Typography margin="0 0 2rem">
        Are you sure you want to delete a tag with content:{" "}
        <i>&quot;{tag?.title}&quot;</i>
      </Typography>

      {/* @ts-expect-error */}
      <form action={handleSubmit}>
        <ConfirmButton>Delete</ConfirmButton>
      </form>
    </>
  );
}

type AddTagPageProps = {
  searchParams?: Record<string, string> | null;
};
