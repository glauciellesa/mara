import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";
import Head from "next/head";

type LayoutProps = {
  title?: string;
  children?: ReactNode;
};

const RootLayout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Amazoni" : "Amazoni"}</title>
        <meta name="description" content="ECommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex min-h-screen flex-col justify-between">
        <header>
          <Navbar />
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default RootLayout;
