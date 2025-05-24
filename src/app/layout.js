import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/contents/ToastContent";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  viewport: "width=device-width, initial-scale=1",
}

export const metadata = {
  title: "Ai",
  description: "Ai Application for Education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-600 selection:text-zinc-100 `}
      >
       <ToastProvider>
        {children}
       </ToastProvider> 
      </body>
    </html>
  );
}

