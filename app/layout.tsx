import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "../components/ThemeProvider";
import { LanguageProvider } from "../components/LanguageProvider";

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Portfolio développeur moderne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
