import { Poppins } from "@next/font/google";
import "@/styles/minireset.css";

const poppins = Poppins({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
