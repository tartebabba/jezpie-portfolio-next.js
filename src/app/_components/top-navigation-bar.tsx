'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Typewriter from 'typewriter-effect';
import { headerNavLinks } from '~/_configs/header-nav-links';

export default function TopNavBar() {
  const pathname = usePathname() as string;

  return (
    <header className="items-center justify-between py-10 md:flex">
      <div className="flex items-center justify-between">
        <Link href="/" className="passHref text-2xl font-bold">
          <Typewriter
            options={{
              strings: [`~${pathname !== '/' ? pathname : 'hello! '} `],
              autoStart: true,
              loop: true,
              deleteSpeed: 10000,
            }}
          />
        </Link>
      </div>
      <div className="mt-5 flex items-center leading-5 md:mt-0">
        <nav>
          {headerNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline rounded px-2 py-1 hover:bg-gray-200 sm:px-3 sm:py-2 dark:hover:bg-gray-700 dark:hover:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
