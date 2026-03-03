import type { Metadata } from "next";
import "./globals.css";
import SkipToContent from "./components/SkipToContent";
import TabNav from './components/TabNav';

export const metadata: Metadata = {
  title: {
    default: "Yuto Asai - Control Engineer",
    template: "%s | Yuto Asai",
  },
  description: "Yuto Asai is a Systems and Control Engineer focusing on nonlinear fuzzy systems and robust control. Showcasing academic publications, research highlights, and open-source contributions.",
  openGraph: {
    title: "Yuto Asai - Control Engineer",
    description: "Yuto Asai is a Systems and Control Engineer focusing on nonlinear fuzzy systems and robust control. Showcasing academic publications, research highlights, and open-source contributions.",
    url: "https://yuto-asai.com", // Replace with actual domain
    siteName: "Yuto Asai's Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Image for social media previews
        width: 1200,
        height: 630,
        alt: "Yuto Asai's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuto Asai - Control Engineer",
    description: "Yuto Asai is a Systems and Control Engineer focusing on nonlinear fuzzy systems and robust control. Showcasing academic publications, research highlights, and open-source contributions.",
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
        <header className="w-full bg-background/[var(--bg-opacity,0.9)] [@supports(backdrop-filter:blur(0))]:backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
            <a href="#overview" className="text-h3 font-bold text-foreground tracking-tight">Yuto Asai</a>
            <div className="flex items-center space-x-4">
              <TabNav />
            </div>
          </div>
        </header>
        <main id="main-content" className="flex-grow container mx-auto px-4 py-section-mobile md:py-section-desktop max-w-7xl">
          {children}
        </main>
      </body>
    </html>
  );
}
