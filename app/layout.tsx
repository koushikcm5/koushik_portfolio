import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Koushik M — Full Stack & Mobile Developer | Co-Founder at Grow AI Tech",
    template: "%s | Koushik M",
  },
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
    "SaaS Builder",
    "Software Engineer Salem",
  ],
  authors: [{ name: "Koushik M", url: "https://mkoushik.me" }],
  creator: "Koushik M",
  publisher: "Koushik M",
  metadataBase: new URL("https://mkoushik.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mkoushik.me",
    title: "Koushik M — Full Stack & Mobile Developer | Co-Founder at Grow AI Tech",
    description:
      "Co-Founder of Grow AI Tech. Building scalable web and mobile applications with modern technology stacks.",
    siteName: "Koushik M Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Koushik M — Full Stack & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koushik M — Full Stack & Mobile Developer",
    description: "Co-Founder of Grow AI Tech. Building scalable digital products.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "your-google-verification-code",
  },
  applicationName: "Koushik M Portfolio",
  category: "technology",
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
              url: "https://mkoushik.me",
              image: "https://mkoushik.me/opengraph-image",
              description: "Co-Founder of Grow AI Tech, specializing in building high-performance, scalable web and mobile applications using modern technologies.",
              sameAs: [
                "https://linkedin.com/in/koushikm",
                "https://github.com/koushikm",
                "https://wa.me/917339217119"
              ],
              jobTitle: "Co-Founder & Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Grow AI Tech",
                url: "https://growaitech.com",
                logo: "https://growaitech.com/logo.png"
              },
              email: "koushikkaalai123@gmail.com",
              telephone: "+917339217119",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Salem",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
              },
              knowsAbout: [
                "React JS",
                "Next JS",
                "Spring Boot",
                "React Native",
                "Flutter",
                "Firebase",
                "MySQL",
                "PostgreSQL",
                "Supabase",
                "Java",
                "TypeScript",
                "Full Stack Development",
                "Mobile App Development",
                "UI/UX Thinking",
                "Software Architecture"
              ]
            }),
          }}
        />
      </head>
      <body className="bg-transparent font-body antialiased text-ink-primary">
        {children}
      </body>
    </html>
  );
}
