"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { pageview } from "@/lib/gtag";

const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID?: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && process.env.NODE_ENV === "production") {
      pageview(pathname + searchParams);
    }
  }, [pathname, searchParams]);

  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      {/* https://nextjs.org/docs/messages/next-script-for-ga */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
