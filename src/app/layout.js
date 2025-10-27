
import { Lavishly_Yours, Stalemate, Buda, Montserrat } from "next/font/google";
import "./globals.css";

// Importando la fuente para el cuerpo del texto
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat", // Mantenemos esta para el cuerpo
});

// NUEVA FUENTE: Para "Conecta con tu Esencia Divina"
const lavishly = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lavishly",
});

// NUEVA FUENTE: Para el logo "Cristina Holística"
const stalemate = Stalemate({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-stalemate",
});

// NUEVA FUENTE: Para el resto de los títulos
const buda = Buda({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-buda",
});

export const metadata = {
  title: "Cristina | Conecta con tu Esencia Divina",
  description: "Un viaje de sanación para el alma, donde la naturaleza y tu mundo interior se encuentran.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${lavishly.variable} ${stalemate.variable} ${buda.variable}`}>
      <head>
        <link rel="icon" href="/icon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
