import Link from 'next/link';

export default function Footer() {
  const linkStyles =
    'mx-2 font-bold link-underline hover:text-[hsl(280,100%,70%)]';

  return (
    <footer className='mt-auto border-t'>
      <div className="flex items-center justify-between m-2 mb-5">
        <div className="">
          <div className="mx-1 text-sm">
            <Link href="" className="link-underline">
              Made by Jez{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
        </div>
        <div>
          <Link href="https://github.com/tartebabba" className={linkStyles}>
            GitHub.
          </Link>
          <Link
            href="https://www.linkedin.com/in/jezpiedad/"
            className={linkStyles}
          >
            LinkedIn.
          </Link>
        </div>
      </div>
    </footer>
  );
}
