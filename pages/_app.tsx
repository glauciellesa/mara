import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { StoreCartProvider } from "@/Context/StoreCartContext";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import RootLayout from "@/components/RootLayout";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import type { NextComponentType } from "next"; //Import Component type

//Add custom appProp type then use union to add it
type CustomAppProps = AppProps & {
  Component: NextComponentType & { auth?: boolean }; // add auth type
};

config.autoAddCss = false;

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) => {
  return (
    <SessionProvider session={session}>
      <StoreCartProvider>
        <RootLayout title="Home Page">
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </RootLayout>
      </StoreCartProvider>
    </SessionProvider>
  );
};

const Auth = ({ children }) => {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/unauthorized?message=Login Required");
    },
  });
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return children;
};

export default App;
