import Link from "next/link";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import prisma from "../../lib/prisma";
import { Heading } from "@/components/Heading";

async function addTag(data: FormData) {
  "use server";

  const name = data.get("name")?.valueOf();
  if (typeof name !== "string" || name.length === 0) {
    throw new Error("Invalid name");
  }
  const user = await prisma.users.create({
    data: {
      name,
      id: uuidv4(),
      tags: {
        create: [{ title: "Test tag 1" }, { title: "Test tag 2" }],
      },
    },
  });

  console.log(user);

  redirect("/");
}

export default function AddTagPage() {
  return (
    <div>
      <header>
        <Heading variant="h2">Add new tag</Heading>
      </header>
      <form action={addTag}>
        <input name="name" type="text" />
        <button type="submit">Submit</button>
        <Link href="/">Back</Link>
      </form>
    </div>
  );
}
