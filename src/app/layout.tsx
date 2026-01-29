import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { RESUME_DATA } from "@/data/portfolio";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.work[0].title}`,
  description: RESUME_DATA.summary,
  keywords: [
    "CiaoRaviRaj",
    "ciaoraviraj",
    "Ravi Raj",
    "Full Stack Developer",
    "Full Stack",
    "SaaS",
    "saas",
    "Node.js",
    "node.js",
    "AI Engineer",
    "Backend Developer",
    "Next.js",
    "React",
    "Node.js",
  ],
  openGraph: {
    title: `${RESUME_DATA.name} | ${RESUME_DATA.work[0].title}`,
    description: RESUME_DATA.summary,
    url: RESUME_DATA.personalWebsiteUrl,
    siteName: "CiaoRaviRaj",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${RESUME_DATA.name} | ${RESUME_DATA.work[0].title}`,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: RESUME_DATA.name,
    alternateName: "CiaoRaviRaj",
    url: RESUME_DATA.personalWebsiteUrl,
    image: RESUME_DATA.avatarUrl,
    sameAs: RESUME_DATA.contact.social.map((social) => social.url),
    jobTitle: RESUME_DATA.work[0].title,
    worksFor: {
      "@type": "Organization",
      name: RESUME_DATA.work[0].company,
    },
    description: RESUME_DATA.summary,
  };

  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
