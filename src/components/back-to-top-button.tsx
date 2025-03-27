"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [ isVisible, setIsVisible ] = useState(false);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([ entry ]) => {
      if (entry.isIntersecting !== isVisible) {
        setIsVisible(entry.isIntersecting);
      }
    });

    const currentRef = document.querySelector("#scroll-observer");
    if (currentRef) {
      scrollObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        scrollObserver.unobserve(currentRef);
      }
    };
  }, [ isVisible ]);

  return (
    <div className="!sticky bottom-5 h-0 flex items-end justify-end">
      <Button
        onClick={() => document.querySelector("#scroll-container")?.scrollTo({ top: 0, behavior: "smooth" })}
        variant="default"
        size="icon"
        className={cn(
          "rounded-full shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg",
          { "opacity-0 duration-1000": isVisible },
        )}
      >
        <FaChevronUp className="w-6 h-6" />
      </Button>
    </div>

  );
};
BackToTopButton.displayName = "BackToTopButton";

export { BackToTopButton };
