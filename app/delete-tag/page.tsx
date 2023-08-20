import Link from "next/link";
import { redirect } from "next/navigation";

import prisma from "../../lib/prisma";
import { Heading } from "@/components/Heading";

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
    <div>
      <header>
        <Heading variant="h2">
          Delete tag with content &quot;{tag?.title}&quot;
        </Heading>
      </header>
      {/* @ts-expect-error */}
      <form action={handleSubmit}>
        <button type="submit">Delete</button>
        <Link href="/">Back</Link>
      </form>
    </div>
  );
}

type AddTagPageProps = {
  searchParams?: Record<string, string> | null;
};
