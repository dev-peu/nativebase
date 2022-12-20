import React from "react";
import { NativeBaseProvider } from "native-base";
import Home from "./src/pages/Home";

export default function App() {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}
