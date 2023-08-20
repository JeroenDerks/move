import prisma from "@/lib/prisma";
import Table from "@/components/Table";
import { Heading } from "@/components/Heading";
import { Typography } from "@/components/Typography";
import { Suspense } from "react";

// Prisma does not support Edge without the Data Proxy currently
// export const runtime = 'edge'
export const preferredRegion = "home";
export const dynamic = "force-dynamic";

export default async function Home() {
  await prisma.$connect();

  return (
    <main>
      <Heading variant="h1">Tag management</Heading>
      <Typography margin="2rem 0">
        Welcome to the tag management assignment by Jeroen Derks
      </Typography>
      <Suspense fallback={<Typography>Loading...</Typography>}>
        {/* @ts-expect-error Async Server Component */}
        <Table />
      </Suspense>
    </main>
  );
}
