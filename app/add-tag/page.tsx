"use server";

import { redirect } from "next/navigation";

import prisma from "../../lib/prisma";
import { Heading } from "@/components/Heading";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { BackButton } from "@/components/BackButton";
import { Typography } from "@/components/Typography";

export default async function AddTagPage({ searchParams }: AddTagPageProps) {
  const user = await prisma.users.findUnique({
    where: {
      id: searchParams?.user,
    },
  });

  const body = user ? `Add a new tag for ${user.name}` : "User not found";

  const handleSubmit = async (data: FormData) => {
    const title = data?.get("title")?.valueOf();

    if (!user) return;
    if (typeof title !== "string" || title.length === 0) return;

    await prisma.tag.create({ data: { title, userId: user?.id } });

    redirect("/");
  };

  return (
    <>
      <BackButton />
      <Heading variant="h3">Add tag</Heading>
      <Typography margin="0 0 2rem">{body}</Typography>
      {/* @ts-expect-error */}
      <form action={handleSubmit}>
        <Input name="title" />
        <Button
          margin="0 0 0 0.5rem"
          type="submit"
          disabled={Boolean(user?.id) === false}
        >
          Submit
        </Button>
      </form>
    </>
  );
}

type AddTagPageProps = {
  searchParams?: Record<string, string> | null;
};
