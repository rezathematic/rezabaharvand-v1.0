import Avatar from "./Avatar";
import Date from "./Date";
import Link from "next/link";
import CoverImage from "./CoverImage";

export default function PostsPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <h3 className="text-2xl font-semibold mb-3 leading-snug">
        <Link href={`/blog/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-sm text-gray-500 mb-4">
        <Date dateString={date} />
      </div>
      <p className="text leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
