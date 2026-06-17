import type { Metadata, Viewport } from "next";
import "./globals.css";
import { heroImage, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "현대천막 | 정전기방지용 싸이로망·여과포·산업용 캔바스 전문",
    template: "%s | 현대천막"
  },
  description: site.description,
  keywords: [
    "현대천막",
    "정전기방지용 싸이로망",
    "여과포",
    "산업용 캔바스",
    "자바라",
    "천막 주문제작"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "현대천막 | 정전기방지용 싸이로망·여과포·산업용 캔바스 전문",
    description: site.description,
    url: site.domain,
    siteName: site.name,
    images: [
      {
        url: heroImage,
        width: 1200,
        height: 800,
        alt: "현대천막 정전기방지용 싸이로망 및 산업용 캔바스 제작"
      }
    ],
    locale: "ko_KR",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c4f8a"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
