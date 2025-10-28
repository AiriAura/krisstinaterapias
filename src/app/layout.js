
import { Lavishly_Yours, Stalemate, Buda, Montserrat, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

// Importando la fuente para el cuerpo del texto
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat",
});

// FUENTE: Para "Conecta con tu Esencia Divina"
const lavishly = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lavishly",
});

// FUENTE: Para el logo "Cristina Holística"
const stalemate = Stalemate({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-stalemate",
});

// FUENTE: Para títulos (actualmente en desuso)
const buda = Buda({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-buda",
});

// NUEVA FUENTE: Para los títulos de sección (H2)
const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cinzel",
});

export const metadata = {
  title: "Cristina | Conecta con tu Esencia Divina",
  description: "Un viaje de sanación para el alma, donde la naturaleza y tu mundo interior se encuentran.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${lavishly.variable} ${stalemate.variable} ${buda.variable} ${cinzel.variable}`}>
      <head>
        <link rel="icon" href="/icon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
