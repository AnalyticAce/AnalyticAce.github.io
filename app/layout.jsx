import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsmono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono', // CSS

});

export const metadata = {
  title: "DOSSEH Shalom",
  description: "Build By DOSSEH Shalom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsmono.className}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        </body>
    </html>
  );
}
