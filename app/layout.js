"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import "./globals.css";
import { Advent_Pro } from "next/font/google";

const Adv = Advent_Pro({
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      dark: "#5d059c",
      main: "#8608E0",
      light: "#9e39e6",
      contrastText: "#E9E1EF",
    },
    secondary: {
      dark: "#3c1656",
      main: "#56207C",
      light: "#774c96",
      contrastText: "#E9E1EF",
    },
  },
  typography: {
    h1: {
      fontSize: "4.210rem",
      fontWeight: 700,
      fontFamily: Adv.style.fontFamily,
    },
    h2: {
      fontSize: "3.158rem",
      fontWeight: 700,
      fontFamily: Adv.style.fontFamily,
    },
    h3: {
      fontSize: "2.369rem",
      fontWeight: 700,
      fontFamily: Adv.style.fontFamily,
    },
    h4: {
      fontSize: "1.777rem",
      fontWeight: 700,
      fontFamily: Adv.style.fontFamily,
    },
    h5: {
      fontSize: "1.333rem",
      fontWeight: 700,
      fontFamily: Adv.style.fontFamily,
    },
    button: {
      fontSize: "1.33rem",
      fontFamily: Adv.style.fontFamily,
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
