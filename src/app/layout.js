
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Cristina | Conecta con tu Esencia Divina",
  description: "Un viaje de sanación para el alma, donde la naturaleza y tu mundo interior se encuentran.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${playfair.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
