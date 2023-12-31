import { Locale, validateLocale } from "@/i18n";
import { getLocalesOfPost, getPost, getPosts } from "@/lib/get-contents";
import { notFound } from "next/navigation";
import ContentBody from "@/components/content-body";

export default function Post({
  params: { locale, id },
}: {
  params: { locale: Locale; id: string };
}) {
  validateLocale(locale);
  const post = getPost(locale, id);
  if (!post) notFound();

  return (
    <ContentBody locale={locale} post={post}>
      {post.body}
    </ContentBody>
  );
}

export function generateMetadata({
  params: { locale, id },
}: {
  params: { locale: Locale; id: string };
}) {
  const post = getPost(locale, id);
  if (!post) notFound();
  return {
    title: post.title,
    description: post.description,
  };
}

export function generateStaticParams({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const posts = getPosts(locale);
  return posts.map((post) => ({ id: post.id }));
}
