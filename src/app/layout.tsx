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
      <GoogleAnalytics />
      <body>
        <NextProvider>
          <NextLayout>{children}</NextLayout>
        </NextProvider>
      </body>
    </html>
  );
}
