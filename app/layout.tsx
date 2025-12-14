import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "LaCasa Curtains",
  description: "Luxury Tailored Curtains",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-text antialiased overflow-x-hidden">
        <Suspense fallback={null}>
          <SmoothScroll />
          {children}
          <ScrollToTopButton />
        </Suspense>
      </body>
    </html>
  );
}
