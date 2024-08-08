import Head from "next/head";
import Input from "../components/Input";

export default function Home() {
  return (
    <div>
      <Head>
        <title>React - Next - SSR - Vercel</title>
      </Head>

      <Input placeholder="Search Weather by Zip Code..." />

    </div>
  );
}