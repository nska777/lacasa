import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CornicesCatalogClient from "./CornicesCatalogClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <CornicesCatalogClient />
      </Suspense>
      <Footer />
    </>
  );
}
