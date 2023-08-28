import { redirect } from "next/navigation";

import prisma from "../../lib/prisma";
import { Heading } from "@/components/Heading";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default async function AddTagPage({ searchParams }: AddTagPageProps) {
  const user = await prisma.users.findUnique({
    where: { id: searchParams?.userId },
    include: { tags: true },
  });

  const tag = user?.tags.find((tag) => tag.id === searchParams?.tagId);

  const handleSubmit = async (data: FormData) => {
    "use server";

    const title = data?.get("title")?.valueOf();

    if (!tag) return;
    if (typeof title !== "string" || title.length === 0) return;

    await prisma.tag.update({ where: { id: tag.id }, data: { title } });

    redirect("/");
  };

  return (
    <>
      <BackButton />
      <Heading variant="h2">Edit tag for {user?.name}</Heading>
      {/* @ts-expect-error */}
      <form action={handleSubmit}>
        <Input name="title" defaultValue={tag?.title} />
        <Button type="submit" margin="0 0 0 0.5rem" disabled={!tag?.id}>
          Submit
        </Button>
      </form>
    </>
  );
}

type AddTagPageProps = {
  searchParams?: Record<string, string> | null;
};
