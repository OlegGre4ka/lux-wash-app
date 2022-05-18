import React from "react";
import { AppWrapper } from "./appStyled.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainRoutes from "./routes";

export default function App() {
  return (
    <AppWrapper>
      <Navbar />
      <MainRoutes />
      <Footer />
    </AppWrapper>
  );
}

