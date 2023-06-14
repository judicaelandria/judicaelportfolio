import "../styles/global.css";
import * as React from "react";

export const metadata = {
  title: "Judicaël Andriamahandry",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
