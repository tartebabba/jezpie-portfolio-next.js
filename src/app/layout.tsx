import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Jez Pie - Software Engineering Portfolio",
  description: "Jez Pie - My software engineering portfolio and programming blog",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
  creator: 'Jez Pie',
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
