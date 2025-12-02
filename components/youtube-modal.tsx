"use client";

import { useState, ReactNode } from "react";

interface YouTubeModalProps {
  videoId?: string;
  trigger: (props: { open: () => void }) => ReactNode;
}

export default function YouTubeModal({
  videoId = "roksWOvPsDs",
  trigger
}: YouTubeModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      {trigger({ open })}

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="absolute inset-0" onClick={close}></div>
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-200">
            <button
              onClick={close}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors backdrop-blur-md"
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative pb-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
