import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "현대천막 | 산업용 캔버스·자바라 제작 전문",
    template: "%s | 현대천막"
  },
  description: site.description,
  keywords: [
    "현대천막",
    "산업용 캔버스",
    "자바라 제작",
    "집진설비",
    "싸이로",
    "호퍼",
    "특수 주문제작"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "현대천막 | 산업용 캔버스·자바라 제작 전문",
    description: site.description,
    url: site.domain,
    siteName: site.name,
    images: [
      {
        url: "/images/industrial-hero.png",
        width: 1200,
        height: 800,
        alt: "현대천막 산업용 캔버스 및 자바라 제작"
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
