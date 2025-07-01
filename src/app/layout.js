import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  // style: ["normal", "italic"],
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "eLearning Platform",
  description: "An eLearning platform built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}