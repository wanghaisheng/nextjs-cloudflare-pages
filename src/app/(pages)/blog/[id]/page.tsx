export const runtime = "edge";

import Link from "next/link";

import { getBlog } from "@/app/features/blogs";
import { getPath } from "@/app/utils";

type BlogPageParams = Readonly<{
  params: {
    id: string;
  };
}>;

export default async function BlogPage({ params: { id } }: BlogPageParams) {
  const blog = await getBlog(id);

  return (
    <main>
      <Link href={getPath.home()}>戻る</Link>
      <h1 className="text-2xl font-bold my-4">{blog.title}</h1>
      <div
        className="my-4"
        dangerouslySetInnerHTML={{
          __html: blog.content,
        }}
      />
    </main>
  );
}
