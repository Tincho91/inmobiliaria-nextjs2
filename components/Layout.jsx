import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Mezzadri Propiedades</title>
    </Head>
    <Box maxWidth='1280px' margin='auto' h='100vh'>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </Box>
  </>
);

export default Layout