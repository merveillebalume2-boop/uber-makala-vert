import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../components/CartContext";
import { ThemeProvider } from "../components/ThemeContext";
import { LanguageProvider } from "../components/LanguageContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Makala Vert - Uber for Gas & Regenerative Charcoal",
  description: "Sustainable energy solutions for Goma and Nord-Kivu. Order your LPG gas and eco-friendly regenerative charcoal with ease.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
