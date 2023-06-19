import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { Header } from "~/components/ui/Header";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>GPT Playground</title>
        <meta name="description" content="A playground for GPT prompts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto px-4">
        <h1 className="text-6xl font-bold">GPT Playground</h1>
        <p className="mt-3 text-2xl">
          <Link href="/playground" className="text-blue-600 hover:underline">
            Playground
          </Link>
          <span className="mx-2">|</span>
          <Link href="/admin" className="text-blue-600 hover:underline">
            Admin
          </Link>
        </p>
        <p className="mt-3 text-2xl">
          {hello.data ? (
            <span className="text-green-600">{hello.data.greeting}</span>
          ) : (
            <span className="text-gray-600">Loading...</span>
          )}
        </p>
      </main>
    </>
  );
}
