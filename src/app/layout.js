import "./globals.css";
import { ViewTransition } from "react";

import { Header } from "@/ui/common/Header.js";
import { SubHeader } from "@/ui/common/Subheader"; 

export const metadata = {
  title: "Spybee- Inicio",
  description: "Este es el sitio web de Spybee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <ViewTransition>
        <body>
          <Header />
          <SubHeader />
          {children}
        </body>
      </ViewTransition>
    </html>
  );
}
