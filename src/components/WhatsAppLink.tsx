"use client";

import { type ComponentProps } from "react";
import { trackLead } from "@/lib/metaPixel";

export function WhatsAppLink({ onClick, ...props }: ComponentProps<"a">) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        trackLead();
        onClick?.(e);
      }}
    />
  );
}
