import type { Metadata } from "next";
import "./globals.css";
import SkipToContent from "./components/SkipToContent";
import TabNav from './components/TabNav';
import ThemeToggle from './components/ThemeToggle';

export const metadata: Metadata = {
  title: {
    default: "Yuto Asai - Assistant Professor, Systems and Control Engineer",
    template: "%s | Yuto Asai",
  },
  description: "Yuto Asai is an Assistant Professor specializing in Systems and Control Engineering, focusing on nonlinear fuzzy systems, Lyapunov stability, and robust control. Showcasing academic publications, research highlights, and awards.",
  openGraph: {
    title: "Yuto Asai - Assistant Professor, Systems and Control Engineer",
    description: "Yuto Asai is an Assistant Professor specializing in Systems and Control Engineering, focusing on nonlinear fuzzy systems, Lyapunov stability, and robust control. Showcasing academic publications, research highlights, and awards.",
    url: "https://yuto-asai.com", // Replace with actual domain
    siteName: "Yuto Asai's Profile",
    images: [
      {
        url: "/og-image.jpg", // Image for social media previews
        width: 1200,
        height: 630,
        alt: "Yuto Asai's Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuto Asai - Assistant Professor, Systems and Control Engineer",
    description: "Yuto Asai is an Assistant Professor specializing in Systems and Control Engineering, focusing on nonlinear fuzzy systems, Lyapunov stability, and robust control. Showcasing academic publications, research highlights, and awards.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Yuto Asai",
          "url": "https://yuto-asai.com", // Replace with actual domain
          "image": "/profile.jpg", // Replace with actual profile image
          "sameAs": [
            "https://github.com/Yuto-San",
            "https://www.linkedin.com/in/yuto-asai/",
            "https://scholar.google.com/citations?user=YOUR_ID", // Replace with actual Google Scholar ID
            "https://orcid.org/YOUR_ORCID", // Replace with actual ORCID ID
          ],
          "affiliation": {
            "@type": "Organization",
            "name": "Aoyama Gakuin University",
            "sameAs": "https://www.aoyama.ac.jp/"
          },
          "jobTitle": "Assistant Professor",
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "Kyoto University",
              "alumniOf": "Ph.D."
            },
          ]
        })}} />
        <SkipToContent />
        <header className="w-full bg-bg0 border-b border-border py-4 sticky top-0 z-50">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <span className="text-xl font-bold text-text0">Portfolio</span>
            <div className="flex items-center space-x-4">
              <TabNav />
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main id="main-content" className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 max-w-screen-xl">
          {children}
        </main>
      </body>
    </html>
  );
}
