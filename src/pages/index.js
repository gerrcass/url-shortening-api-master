import Head from "next/head";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frontend Mentor | Shortly URL shortening API Challenge</title>
      </Head>
      <Header />
      <main>Content Here</main>
      <Footer />
    </>
  );
}
