// css files
import "./hljs.css";    // markdown code block syntax color
import "./colors.css";  // custom color variable names
import "./globals.css";
// components
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/navbar/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
// fonts
import { Inter } from "next/font/google";
// utils
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gitblog",
  description: "A markdown supported GitHub blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
