import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contact Form",
  description: "send mail to the admin of the page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
