import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { AuthProvider } from "@/providers/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Week - Store",
  description: "E-commerce construído na segunda edição do Full Stack Week",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className + "h-screen"}>
        <AuthProvider>
          <div className="flex h-full flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <footer>Footer</footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
