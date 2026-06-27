"use client";

import Image from "next/image";
import {Play, X} from "lucide-react";
import {useEffect, useState} from "react";

type UgcVideo = {
  title: string;
  category: string;
  src: string;
  poster: string;
};

type UgcVideoShowcaseProps = {
  videos: UgcVideo[];
};

function UgcVideoCard({
  video,
  index,
  onSelect
}: {
  video: UgcVideo;
  index: number;
  onSelect: (video: UgcVideo) => void;
}) {
  return (
    <article className={`ugc-video-card ugc-video-card-${index + 1}`}>
      <button
        aria-label={`Play ${video.title}`}
        className="ugc-video-frame"
        data-video-card
        onClick={() => onSelect(video)}
        type="button"
      >
        <Image
          alt={`${video.title} thumbnail`}
          className="ugc-video-thumbnail"
          fill
          sizes="(max-width: 720px) 84vw, (max-width: 1120px) 42vw, 22vw"
          src={video.poster}
        />
        <span className="ugc-video-shade" aria-hidden="true" />
        <span className="ugc-play-button" aria-hidden="true">
          <Play size={24} />
        </span>
      </button>
      <div className="ugc-video-caption">
        <span>{video.category}</span>
        <h3>{video.title}</h3>
      </div>
    </article>
  );
}

export function UgcVideoShowcase({videos}: UgcVideoShowcaseProps) {
  const [activeVideo, setActiveVideo] = useState<UgcVideo | null>(null);

  useEffect(() => {
    if (!activeVideo) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  return (
    <>
      <div className={`ugc-video-grid ugc-video-grid-${Math.min(videos.length, 4)}`}>
        {videos.map((video, index) => (
          <UgcVideoCard index={index} key={video.src} onSelect={setActiveVideo} video={video} />
        ))}
      </div>

      {activeVideo ? (
        <div
          aria-label={activeVideo.title}
          aria-modal="true"
          className="ugc-player-backdrop"
          data-lenis-prevent=""
          onClick={() => setActiveVideo(null)}
          role="dialog"
        >
          <div className="ugc-player-modal" data-lenis-prevent="" onClick={(event) => event.stopPropagation()}>
            <button
              aria-label="Close video"
              className="ugc-player-close"
              onClick={() => setActiveVideo(null)}
              type="button"
            >
              <X aria-hidden="true" size={20} />
            </button>
            <div className="ugc-player-media">
              <video
                autoPlay
                controls
                key={activeVideo.src}
                playsInline
                poster={activeVideo.poster}
                preload="metadata"
                src={activeVideo.src}
              />
            </div>
            <div className="ugc-player-copy">
              <span>{activeVideo.category}</span>
              <h3>{activeVideo.title}</h3>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
