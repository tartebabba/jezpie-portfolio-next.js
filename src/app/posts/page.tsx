import Link from 'next/link';
import { getBlogs } from './posts';

export default async function PostsPage() {
  const posts = await getBlogs();

  return (
    <div className="">
      <h1 className="text-3xl font-bold">Posts</h1>
      <p>Here are </p>
      {posts.map((post, index) => (
        <Link href={`/posts/${post.slug}`}>
          <div className="border-b border-gray-300">
            <article
              key={index}
              className="flex cursor-pointer flex-row justify-between rounded-md p-2 text-slate-500 duration-200 ease-in-out hover:bg-gray-100 hover:text-slate-800"
            >
              <h2 className="font-bold">{post.frontmatter.title}</h2>
              <p>{post.frontmatter.publishDate}</p>
            </article>
          </div>
        </Link>
      ))}
    </div>
  );
}
