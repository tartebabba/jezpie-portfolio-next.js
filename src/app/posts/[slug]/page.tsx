import { getBlogBySlug, getAllBlogSlug } from '../posts';

export async function generateStaticParams() {
  return getAllBlogSlug();
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogBySlug(params.slug);

  return (
    <div>
      <h1>Post</h1>
      <article className="prose dark:prose-invert">{post.content}</article>
    </div>
  );
}
