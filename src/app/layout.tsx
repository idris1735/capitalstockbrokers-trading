import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Preloader } from "@/components/preloader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Capital Stockbrokers Limited",
  description: "Gambia's first licensed stockbroking platform",
  icons: {
    icon: [
      {
        url: "/csl-logo.jpg",
        href: "/csl-logo.jpg",
      }
    ],
    apple: [
      {
        url: "/csl-logo.jpg",
        href: "/csl-logo.jpg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/jpeg" href="/csl-logo.jpg" />
        <link rel="apple-touch-icon" href="/csl-logo.jpg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Preloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
