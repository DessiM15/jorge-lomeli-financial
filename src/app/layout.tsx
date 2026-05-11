import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Lomeli Financial Group | Securing Your Financial Future",
  description:
    "Expert financial services in McAllen, TX. Retirement planning, Social Security evaluation, tax strategies, estate planning, and more. Bilingual service in English and Spanish.",
  keywords: [
    "financial advisor",
    "McAllen TX",
    "retirement planning",
    "Social Security",
    "tax strategies",
    "estate planning",
    "life insurance",
    "wealth management",
    "bilingual financial services",
  ],
  openGraph: {
    title: "Lomeli Financial Group | Securing Your Financial Future",
    description:
      "Expert financial services in McAllen, TX. Retirement planning, tax strategies, estate planning, and more.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
