import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "اخر العروض الحصرية ",
  description: "قارن الاسعار واكتشف احدث العروض والخدمات الحصرية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17662147013"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17662147013');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
