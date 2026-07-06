"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    const isChunkError =
      /ChunkLoadError|Loading chunk|Importing a module|failed to fetch dynamically imported module/i.test(
        error?.message || "",
      );

    if (isChunkError && !sessionStorage.getItem("chunk-reload")) {
      sessionStorage.setItem("chunk-reload", "1");
      window.location.reload();
      return;
    }

    sessionStorage.removeItem("chunk-reload");
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="text-body-color">Please try again.</p>
      <button
        onClick={() => reset()}
        className="rounded-md bg-primary px-6 py-2 text-white"
      >
        Try again
      </button>
    </div>
  );
}
