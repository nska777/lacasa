"use client";

import HTMLFlipBook from "react-pageflip";

interface FlipCatalogProps {
  pages: string[]; // массив изображений страниц
}

export default function FlipCatalog({ pages }: FlipCatalogProps) {
  return (
    <div className="flex justify-center py-20">
      <HTMLFlipBook
        width={900}
        height={1200}
        size="stretch"
        minWidth={300}
        maxWidth={2000}
        minHeight={400}
        maxHeight={2500}
        drawShadow={true}
        maxShadowOpacity={0.6}
        showCover={true}
        mobileScrollSupport={true}
        className="shadow-2xl rounded-xl overflow-hidden"
      >
        {pages.map((src, i) => (
          <div key={i} className="w-full h-full bg-white">
            <img src={src} className="w-full h-full object-cover" />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}
