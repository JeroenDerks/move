import Link from "next/link";
import { redirect } from "next/navigation";

import prisma from "../../lib/prisma";
import { Heading } from "@/components/Heading";

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
    <div>
      <Heading variant="h2">Add new tag for {user?.name}</Heading>

      {/* @ts-expect-error */}
      <form action={handleSubmit}>
        <input name="title" type="text" />
        <button type="submit" disabled={!user?.id}>
          Submit
        </button>
        <Link href="/">Back</Link>
      </form>
    </div>
  );
}

type AddTagPageProps = {
  searchParams?: Record<string, string> | null;
};
