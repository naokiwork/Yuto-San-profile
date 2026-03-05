import type { Metadata } from "next";
import "./globals.css";
import SkipToContent from "./components/SkipToContent";
import TabNav from '@/components/TabNav';

export const metadata: Metadata = {
  title: {
    default: "Yuto Asai - Control Engineer",
    template: "%s | Yuto Asai",
  },
  description: "Personal portfolio of Yuto Asai, a Control Engineer specializing in robotics and aerospace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SkipToContent />
        <header className="w-full bg-bg-surface/[var(--tw-bg-opacity, 0.9)] [@supports(backdrop-filter:blur(0))]:backdrop-blur-md border-b border-border-subtle sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-md-container">
            <a href="#overview" className="text-h3 font-bold text-text-primary tracking-tight">Yuto Asai</a>
            <TabNav />
          </div>
         </header>
         <main id="main-content" className="flex-grow container mx-auto px-4 py-section-mobile md:py-section-desktop max-w-md-container">
           {children}
         </main>
       </body>
     </html>
  );
}
