import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkipToContent from "./components/SkipToContent";

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
  // Add structured data as a script tag in the body later
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient-to-br from-dark-900 to-dark-700 text-light min-h-screen flex flex-col font-sans antialiased">
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
            // Add other alumni info if applicable
          ]
        })}} />
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
