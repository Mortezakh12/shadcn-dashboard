"use client";

import { useEffect } from "react";
import { initializeParse } from "./ParseService";

export function ParseInitializer() {
  useEffect(() => {
    initializeParse();
  }, []);
  return null;
}
