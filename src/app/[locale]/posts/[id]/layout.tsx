export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose dark:prose-invert mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      {children}
    </article>
  );
}
