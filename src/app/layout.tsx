import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import GlobalSplash from "@/components/GlobalSplash";
import { rajdhani, okraSans } from "./fonts";

export const metadata: Metadata = {
  title: "Anant's Portfolio",
  description:
    "A passionate Programmer having proficient skills in C, C++, Java ",
    icons:"./v.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${rajdhani.className} ${okraSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalSplash>{children}</GlobalSplash>
        </ThemeProvider>
      </body>
    </html>
  );
}
