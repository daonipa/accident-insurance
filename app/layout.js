import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "통합상해보험 | 넘어지는 건 1초, 치료비는 1년치 월급",
  description: "골절 한 번에 평균 치료비 800만원. 일상 사고부터 중대 재해까지 올인원 보장하는 통합상해보험 무료 설계.",
  keywords: "통합상해보험, 상해보험, 골절보험, 사고보험, 일상사고, 교통사고보험",
  openGraph: {
    title: "통합상해보험 | 넘어지는 건 1초, 치료비는 1년치 월급",
    description: "골절 한 번에 평균 치료비 800만원. 일상 사고부터 중대 재해까지 올인원 보장.",
    type: "website",
    locale: "ko_KR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: "통합상해보험 무료 설계",
              description: "일상 사고부터 중대 재해까지 올인원 보장하는 통합상해보험 무료 상담",
              areaServed: "KR",
            }),
          }}
        />
      </head>
      <body className={`${notoSansKR.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
