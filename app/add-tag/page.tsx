import { redirect } from "next/navigation";

import prisma from "../../lib/prisma";
import { Heading } from "@/components/Heading";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { BackButton } from "@/components/BackButton";

export default async function AddTagPage({ searchParams }: AddTagPageProps) {
  const user = await prisma.users.findUnique({
    where: {
      id: searchParams?.user,
    },
  });

  const handleSubmit = async (data: FormData) => {
    "use server";

    const title = data?.get("title")?.valueOf();

    if (!user) return;
    if (typeof title !== "string" || title.length === 0) return;

    await prisma.tag.create({ data: { title, userId: user.id } });

    redirect("/");
  };

  return (
    <>
      <BackButton />

      <Heading variant="h3">Add new tag for {user?.name}</Heading>
      {/* @ts-expect-error */}
      <form action={handleSubmit}>
        <Input name="title" />
        <Button margin="0 0 0 0.5rem" type="submit" disabled={!user?.id}>
          Submit
        </Button>
      </form>
    </>
  );
}

type AddTagPageProps = {
  searchParams?: Record<string, string> | null;
};
