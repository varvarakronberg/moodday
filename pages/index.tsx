import Head from "next/head";
import Image from "next/image";
import type { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import { SettingsProvider } from "../context/SettingsContext";
import AnimatedBackground from "../components/AnimatedBackground";
import Header from "../components/Header";
import Controls from "../components/Controls";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type Tag = {
  id: Number;
  tag: String;
  prompt_number: Number;
  is_preset: Boolean;
};

export const getServerSideProps = async () => {
  const tags: Array<Tag> = await prisma.tag.findMany({
    where: { is_preset: true },
  });
  return { props: { tags } };
};

export default function Home({
  tags,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Today I feel so...</title>
        <meta name="description" content="A place to share your current mood" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SettingsProvider>
        <AnimatedBackground>
          <main style={{ textAlign: "center", padding: "64px" }}>
            <Header />
            <div>
              <ul>
                {tags.map((tag) => (
                  <li>
                    {tag.tag} for questions {tag.prompt_number}
                  </li>
                ))}
              </ul>
            </div>
            <Controls />
          </main>
        </AnimatedBackground>
      </SettingsProvider>
    </>
  );
}
