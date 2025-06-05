"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export function OfflineToast() {
  useEffect(() => {
    const handleOnline = () => {
      toast.success("You are back online!");
    };

    const handleOffline = () => {
      toast.error("You are offline. Some features may be limited.");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Check initial status
    if (!navigator.onLine) {
      handleOffline();
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return null;
}