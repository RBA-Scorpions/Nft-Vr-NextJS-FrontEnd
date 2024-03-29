"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
