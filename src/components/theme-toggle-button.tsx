"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggleButton = () => {
  const [ loaded, setLoaded ] = useState(false);
  const { resolvedTheme = "dark", setTheme } = useTheme();

  useEffect(() => {
    setLoaded(true);
    return () => {
      setLoaded(false);
    };
  }, []);

  return (
    <Button variant="outline" className="px-2" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {loaded
        ? resolvedTheme === "light"
          ? <SunIcon className="w-5 h-5" />
          : <MoonIcon className="w-5 h-5" />
        : <Skeleton className="w-5 h-5 rounded-full" />}
    </Button>
  );
};
ThemeToggleButton.displayName = "ThemeToggleButton";

export { ThemeToggleButton };
