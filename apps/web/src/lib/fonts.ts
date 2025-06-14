import { Bricolage_Grotesque, Inter } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const fontHeading = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading"
});
