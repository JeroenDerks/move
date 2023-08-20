import Link from "next/link";
import { redirect } from "next/navigation";

import prisma from "../../lib/prisma";
import { Heading } from "@/components/Heading";

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
    <div>
      <header>
        <Heading variant="h2">Update tag for {user?.name}</Heading>
      </header>
      {/* @ts-expect-error */}
      <form action={handleSubmit}>
        <input name="title" type="text" defaultValue={tag?.title} />
        <button type="submit" disabled={!tag?.id}>
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
