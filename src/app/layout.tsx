import "@/styles/globals.css";
import { NextProvider, NextLayout } from "./providers";
import { Metadata } from "next";
import GoogleAnalytics from "./googleAnalytics";

export const metadata: Metadata = {
  title: "Fastcampus NextMap",
  description: "Next.js 13을 이용한 맛집 앱",
  openGraph: {
    title: "Fastcampus NextMap",
    description: "Next.js 13을 이용한 맛집 앱",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_ID} />
        <NextProvider>
          <NextLayout>{children}</NextLayout>
        </NextProvider>
      </body>
    </html>
  );
}
