import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: 'Forcythe - We Build Digital Products',
  description: 'We build digital products for ambitious businesses',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased`}
      >
        <Navbar />
        <main className="w-full mt-[6.3rem] md:mt-[6.8rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
