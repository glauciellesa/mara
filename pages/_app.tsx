import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { StoreCartProvider } from "@/Context/StoreCartContext";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import RootLayout from "@/components/RootLayout";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout title="Home Page">
      <StoreCartProvider>
        <Component {...pageProps} />
      </StoreCartProvider>
    </RootLayout>
  );
}
