import "@/styles/globals.css";
import { Metadata } from "next";
import { NextProvider, NextLayout } from "./providers";

export const metadata: Metadata = {
  title: "Eatmap",
  description: "Next.js 13을 이용한 지도앱",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextProvider>
          <NextLayout>{children}</NextLayout>
        </NextProvider>
      </body>
    </html>
  );
}
