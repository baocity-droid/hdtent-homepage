import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { GoogleAnalyticsPageView } from "@/components/GoogleAnalyticsPageView";
import { heroImage, site } from "@/lib/site";

const gaMeasurementId = "G-15P0Z3D0CY";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "현대천막 | 산업용 캔바스 · 싸이로망 · 자바라 전문 제작",
    template: "%s | 현대천막"
  },
  description: site.description,
  keywords: [
    "현대천막",
    "정전기방지용 싸이로망",
    "여과포",
    "산업용 캔바스",
    "자바라",
    "집진설비용 후드",
    "특수 천막 주문제작"
  ],
  alternates: {
    canonical: "/"
  },
  verification: {
    other: {
      "naver-site-verification": "9a7cb9c0d655c7cdb347a45aab2a9dd74e48a0a6"
    }
  },
  openGraph: {
    title: "현대천막 | 산업용 캔바스 · 싸이로망 · 자바라 전문 제작",
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
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}', {
              send_page_view: false
            });
          `}
        </Script>
        <GoogleAnalyticsPageView />
        {children}
      </body>
    </html>
  );
}
