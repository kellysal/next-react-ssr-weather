import Head from "next/head";
import Input from "../components/Input";

export default function Home() {
  return (
    <div>
      <Head>
        <title>React - Next - SSR - Vercel</title>
      </Head>

      <div className="home">
        <div className="container">
          <Input placeholder="Search for a city..." />

        </div>
      </div>
    </div>
  );
}