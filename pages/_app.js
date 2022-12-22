import { ChakraProvider } from "@chakra-ui/react";
import { ContextProvider } from "../context";
import Chat from "./chats";

function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ContextProvider>
  );
}

export default App;
