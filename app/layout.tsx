import type { Metadata } from "next";
import { Archivo_Black, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({ variable: "--font-display", weight: "400", subsets: ["latin"] });
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Groovy Matcha Co. — Good energy. Groovy vibes.",
  description: "Matcha latte cremoso, listo para tomar. Energía natural, sabor real y buenas vibras en cada lata.",
  icons: { icon: `${basePath}/favicon.svg` },
  openGraph: {
    title: "Groovy Matcha Co. — Good energy. Groovy vibes.",
    description: "Matcha latte cremoso, listo para tomar.",
    type: "website",
    images: [{ url: `${basePath}/og.png`, width: 1731, height: 909, alt: "Groovy Matcha Co. — Good energy. Groovy vibes." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Groovy Matcha Co. — Good energy. Groovy vibes.",
    description: "Matcha latte cremoso, listo para tomar.",
    images: [`${basePath}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
