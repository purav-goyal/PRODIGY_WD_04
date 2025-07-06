"use client"
import Navbar from "@/components/navbar";
import {ThemeProvider} from "@/components/theme-context";
import {TooltipProvider} from "@/components/ui/tooltip";
import {cn} from "@/lib/utils";
import {Inter as FontSans} from "next/font/google";
import "./globals.css";
import {useRef} from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import {setGlobalState} from "@/global-state";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const scrollRef = useRef(null);
    // @ts-ignore
    setGlobalState("scrollRef", scrollRef);
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased overflow-hidden",
                fontSans.variable
            )}
        >
        <ThemeProvider>
            <SimpleBar scrollableNodeProps={{ref: scrollRef}} style={{maxHeight: "100dvh"}}>
            <TooltipProvider delayDuration={0}>
                {children}
                <Navbar/>
            </TooltipProvider>
            </SimpleBar>
        </ThemeProvider>
        </body>
        </html>
    );
}
