import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CurtainsCatalogClient from "./CurtainsCatalogClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <CurtainsCatalogClient />
      </Suspense>
      <Footer />
    </>
  );
}
