import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Koushik M — Full Stack & Mobile Developer | Co-Founder at Grow AI Tech",
  description:
    "Koushik M is a Full Stack Developer and Android Developer, Co-Founder of Grow AI Tech. Building scalable web and mobile applications with React JS, Next JS, Spring Boot, Flutter, and more.",
  keywords: [
    "Koushik M",
    "Full Stack Developer",
    "Mobile App Developer",
    "React JS Developer",
    "Next JS Developer",
    "Flutter Developer",
    "Spring Boot Developer",
    "Grow AI Tech",
    "Salem Tamil Nadu",
    "Android Developer",
    "React Native Developer",
  ],
  authors: [{ name: "Koushik M", url: "https://growaitech.com" }],
  creator: "Koushik M",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://koushikm.dev",
    title: "Koushik M — Full Stack & Mobile Developer",
    description:
      "Co-Founder of Grow AI Tech. Building scalable digital products with modern technologies.",
    siteName: "Koushik M Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Koushik M — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koushik M — Full Stack & Mobile Developer",
    description: "Co-Founder of Grow AI Tech. Building scalable digital products.",
    images: ["/og-image.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Koushik M",
              url: "https://koushikm.dev",
              sameAs: [
                "https://linkedin.com/in/koushikm",
                "https://github.com/koushikm",
              ],
              jobTitle: "Co-Founder & Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Grow AI Tech",
                url: "https://growaitech.com",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Salem",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className="font-body antialiased bg-white text-ink-primary">
        {children}
      </body>
    </html>
  );
}
