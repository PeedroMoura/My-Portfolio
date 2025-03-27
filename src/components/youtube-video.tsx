"use client";

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect, useRef, useState } from "react";
import { FaSpinner } from "react-icons/fa";

const YouTubeVideo = forwardRef<
  ElementRef<"div">,
  ComponentPropsWithoutRef<"div"> & { videoId: string, loadingImage?: StaticImageData, imageClassName?: string }
>(({ videoId, loadingImage, imageClassName, ...props }, _) => {

  const [ load, setLoad ] = useState(false);
  const [ loaded, setLoaded ] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoad(true);
        observer.disconnect();
      }
    });
    const ref = videoRef.current;
    observer.observe(ref as Element);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, []);
  return (
    <div ref={videoRef} {...props}>
      {load && (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&controls=0`}
          title="YouTube video player"
          className={cn("border-none transition-opacity duration-500", { "hidden": !loaded })}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          onLoad={() => setLoaded(true)}
          allowFullScreen
        ></iframe>
      )}
      {loaded ? null : loadingImage ? (
        <Image src={loadingImage} alt="video image" className={imageClassName} />
      ) : (
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div className="flex items-center gap-2 text-2xl">
            <FaSpinner className="animate-spin" />
            <span>Loading</span>
          </div>
        </div>
      )}
    </div>
  );
});
YouTubeVideo.displayName = "YouTubeVideo";

export { YouTubeVideo };
