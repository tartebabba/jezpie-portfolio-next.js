import Link from 'next/link';
import { getBlogs } from './posts';

export default async function PostsPage() {
  const posts = await getBlogs();

  return (
    <div>
      <h1>Posts</h1>
      <p>Coming soon...</p>
      {posts.map((post, index) => (
        <article key={index}>
          <h2>{post.frontmatter.title}</h2>
          <p>{post.frontmatter.author}</p>
          <p>{post.frontmatter.publishDate}</p>
          <Link href={`/posts/${post.slug}`}>Read more</Link>
        </article>
      ))}
    </div>
  );
}
