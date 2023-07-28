"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("9a4f78f0-2915-4ca6-833c-7786ca89ce35");
  }, []);

  return null;
};
