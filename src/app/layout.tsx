import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import TopNavBar from './_components/top-navigation-bar';
import Footer from './_components/footer';

export const metadata = {
  title: 'Jez Pie - Software Engineering Portfolio',
  description:
    'Jez Pie - My software engineering portfolio and programming blog',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
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
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="flex h-screen flex-col justify-between dark:bg-slate-950 dark:text-slate-50">
        <div className="mx-auto w-[80%] px-4 xl:w-[60%]">
          <TopNavBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
