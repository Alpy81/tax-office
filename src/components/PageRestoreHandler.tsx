"use client";
import { useEffect } from "react";

export default function PageRestoreHandler() {
  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        // Seite wurde aus Browser-Cache wiederhergestellt → neu laden
        window.location.reload();
      }
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  return null;
}
