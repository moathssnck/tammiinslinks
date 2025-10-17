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
      <body>{children}</body>
    </html>
  );
}
