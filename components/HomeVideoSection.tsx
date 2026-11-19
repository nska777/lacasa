"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const videos = [
  { src: "/videos/lacasa-film-1.mp4", title: "LaCasa — Film 01" },
  { src: "/videos/lacasa-film-2.mp4", title: "LaCasa — Film 02" },
];

export default function HomeVideoSection() {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playing, setPlaying] = useState<boolean[]>([false, false]);

  useEffect(() => {
    return () => refs.current.forEach((video) => video?.pause());
  }, []);

  const toggle = async (index: number) => {
    const video = refs.current[index];
    if (!video) return;
    if (!video.paused) {
      video.pause();
      return;
    }
    refs.current.forEach((other, i) => {
      if (i !== index) other?.pause();
    });
    try {
      await video.play();
    } catch {
      // Native video controls remain available if playback is blocked.
    }
  };

  return (
    <section className="relative isolate w-full overflow-hidden bg-[radial-gradient(ellipse_at_50%_30%,#62564D_0%,#39332F_48%,#211E1C_100%)] px-4 py-14 sm:px-6 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-10">
        {videos.map((item, index) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl bg-[#28231f] shadow-[0_20px_60px_rgba(35,27,20,0.18)]"
          >
            <video
              ref={(element) => { refs.current[index] = element; }}
              src={item.src}
              preload="metadata"
              playsInline
              controls
              onPlay={() => setPlaying((prev) => prev.map((value, i) => i === index))}
              onPause={() => setPlaying((prev) => prev.map((value, i) => i === index ? false : value))}
              className="block aspect-[464/848] w-full object-contain"
              aria-label={item.title}
            />
            {!playing[index] && (
              <button
                type="button"
                onClick={() => void toggle(index)}
                aria-label="Play video"
                className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/60 bg-black/40 text-white backdrop-blur-md transition hover:scale-110 hover:bg-black/60"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
