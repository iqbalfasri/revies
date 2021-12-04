import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#1D1D1D",
      },
    },
  },
  colors: {
    brand: {
      black: "#1D1D1D",
      blue: "#0FEFFD",
      blue018: "rgba(15, 239, 253, 0.1)",
      yellow: "#FFE922",
      yellow01: "rgba(255, 233, 34, 0.1)"
    },
  },
  config: {
    initialColorMode: "dark",
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
