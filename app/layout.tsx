import type { Metadata } from "next";
import "./global.css";
import React from "react";
import {
  ClerkProvider,
  // SignInButton,
  // SignedIn,
  // SignedOut,
  // UserButton,
} from "@clerk/nextjs";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Over Flow",
  description:
    "A community driven platform for asking and answering programming questions. Get help, share knowlwdge, and collaborate with developers from around the world. Explore topics in we development, mobile app development, algorithm, data structure, and more",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {/* <h1 className="h1-bold">This is a piece of text</h1> */}
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
