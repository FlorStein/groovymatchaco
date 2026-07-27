import type { Metadata } from "next";
import { Archivo_Black, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({ variable: "--font-display", weight: "400", subsets: ["latin"] });
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Groovy Matcha Co. — Good energy. Groovy vibes.",
  description: "Matcha latte cremoso, listo para tomar. Energía natural, sabor real y buenas vibras en cada lata.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Groovy Matcha Co. — Good energy. Groovy vibes.",
    description: "Matcha latte cremoso, listo para tomar.",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Groovy Matcha Co. — Good energy. Groovy vibes." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Groovy Matcha Co. — Good energy. Groovy vibes.",
    description: "Matcha latte cremoso, listo para tomar.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
