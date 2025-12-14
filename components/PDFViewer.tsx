"use client";

export default function PDFViewer() {
  return (
    <section className="w-full py-20 bg-[#EDE4DD] flex justify-center">
      <div className="w-full max-w-6xl h-[90vh] rounded-xl overflow-hidden shadow-2xl">
        <embed
          src="/catalog.pdf"
          type="application/pdf"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
