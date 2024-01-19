import { AppContextProvider } from "@/context";
import RootLayout from "@/layouts";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <RootLayout>
      <AppContextProvider>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" />
        </AnimatePresence>
      </AppContextProvider>
    </RootLayout>
  );
}
