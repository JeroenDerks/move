import prisma from "../lib/prisma";

async function main() {
  const response = await Promise.all([
    prisma.users.upsert({
      where: { id: "514ccebe-c724-4fce-aade-158f03539a72" },
      update: {},
      create: {
        name: "Montaga Pallarols",
        id: "514ccebe-c724-4fce-aade-158f03539a72",
        tags: {
          create: {
            title: "Frontend developer",
          },
        },
      },
    }),
    prisma.users.upsert({
      where: { id: "ba2121b7-83ac-417e-bfb7-85c39cf53df8" },
      update: {},
      create: {
        name: "Mike Smolders",
        id: "ba2121b7-83ac-417e-bfb7-85c39cf53df8",
        tags: {
          create: [{ title: "Managing Director" }, { title: "Amsterdam" }],
        },
      },
    }),
    await prisma.users.upsert({
      where: { id: "c6732f8d-c068-4a50-a55d-f209fec1db64" },
      update: {},
      create: {
        name: "Jeroen Derks",
        id: "c6732f8d-c068-4a50-a55d-f209fec1db64",
        tags: {
          create: {
            title: "Frontend developer",
          },
        },
      },
    }),
  ]);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
