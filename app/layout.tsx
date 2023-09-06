import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Jacob Duncan",
  description: "My personal website.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#f7f2f2] dark:bg-gray-800">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
