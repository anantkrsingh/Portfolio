"use client";
import React, { useState } from "react";
import SplashScreen from "./SplashScreen";

export default function GlobalSplash({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      {!loading && children}
    </>
  );
}
