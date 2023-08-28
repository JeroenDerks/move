import { redirect } from "next/navigation";

import prisma from "../../lib/prisma";
import { Heading } from "@/components/Heading";
import { BackButton } from "@/components/BackButton";
import { ConfirmButton } from "@/components/ConfirmButton";

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
      <Heading variant="h2">
        Delete tag with content &quot;{tag?.title}&quot;
      </Heading>
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
