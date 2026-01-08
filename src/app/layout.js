
import { Montserrat, Cinzel_Decorative, Lavishly_Yours, Stalemate } from "next/font/google";
import "./globals.css";

// Principio de Single Source of Truth: Las fuentes se definen aquí
// y se asignan a las variables semánticas utilizadas en globals.css.

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-family-body", // Asignado a la variable de cuerpo de texto
});

const headingFont = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-family-heading", // Asignado a la variable de encabezados
});

const displayFont = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-family-display", // Asignado a la variable de texto "display"
});

const logoFont = Stalemate({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-family-logo", // Asignado a la variable del logo
});

export const metadata = {
  title: "Cristina | Conecta con tu Esencia Divina",
  description: "Un viaje de sanación para el alma, donde la naturaleza y tu mundo interior se encuentran.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${bodyFont.variable} ${headingFont.variable} ${displayFont.variable} ${logoFont.variable}`}>
      <head>
        <link rel="icon" href="/icon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
