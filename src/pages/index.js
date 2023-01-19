import Head from "next/head";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Link } from "@/components/Link/Link";
import { Statistics } from "@/components/Statistics/Statistics";
import { CallToAction } from "@/components/CallToAction/CallToAction";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frontend Mentor | Shortly URL shortening API Challenge</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Link />
        <Statistics />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
