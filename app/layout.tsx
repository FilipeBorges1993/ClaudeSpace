import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const excalifont = localFont({
  src: "./fonts/Excalifont-Regular.woff2",
  variable: "--font-excalifont",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClaudeCode Lovers",
  description: "BorisCorps presents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${excalifont.variable} font-sans antialiased bg-[#eef0f3] text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
