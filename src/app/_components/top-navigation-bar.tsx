'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Typewriter from 'typewriter-effect';
import { headerNavLinks } from '~/_configs/header-nav-links';

export default function TopNavBar() {
  const pathname = usePathname() as string;

  return (
    <header className="md:flex items-center justify-between py-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold passHref">
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
      <div className="flex items-center leading-5 mt-5 md:mt-0">
        <nav>
          {headerNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline rounded py-1 px-2  hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
