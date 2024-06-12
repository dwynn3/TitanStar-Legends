import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "./layout.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "TitanStar Legends",
  description: "Rune Mastery Loadout Talent Calculator 9000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
