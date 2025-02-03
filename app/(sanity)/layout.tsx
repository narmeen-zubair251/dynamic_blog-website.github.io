import "../globals.css";
import { Inter } from "next/font/google";

// ✅ Ensure correct font setup
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function SanityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen">{children}</section>
  );
}
