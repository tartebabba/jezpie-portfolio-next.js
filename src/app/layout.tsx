import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import TopNavBar from './_components/top-navigation-bar';
import Footer from './_components/footer';

export const metadata = {
  title: 'Jez Pie - Software Engineering Portfolio',
  description:
    'Jez Pie - My software engineering portfolio and programming blog',
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
      <body>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <TopNavBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
