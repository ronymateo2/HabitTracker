import { GetServerSideProps } from "next";
import prisma from "../../lib/prisma";

export const getData = async () => {
  const users = await prisma.users.findMany();
  console.log(users);
  return users;
};

export default async function Home() {
  const users = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{JSON.stringify(users)}</h1>
    </main>
  );
}
