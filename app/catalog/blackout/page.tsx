import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlackoutCatalogClient from "@/app/catalog/blackout/BlackoutCatalogClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
        <BlackoutCatalogClient />
      </Suspense>

      <Footer />
    </>
  );
}
