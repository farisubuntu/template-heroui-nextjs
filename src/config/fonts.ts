import { Fira_Code as FontMono,
   Inter as FontSans,
   Noto_Naskh_Arabic as FontNaskh,
   Noto_Nastaliq_Urdu as FontNastaliq

  } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontNaskh = FontNaskh({
  subsets: ["arabic"],
  variable: "--font-naskh",
});

export const fontNastaliq = FontNastaliq({
  subsets: ["arabic"],
  variable: "--font-nastaliq",
});