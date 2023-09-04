import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="description"
          content="Anish Shanbhag's website, showcasing his personal projects, past work experience in web/AI/ML/computer systems, and links to his social media and resume."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
