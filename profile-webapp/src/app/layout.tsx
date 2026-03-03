import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkipToContent from "./components/SkipToContent";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A personal portfolio website showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark text-light min-h-screen flex flex-col font-sans antialiased">
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
