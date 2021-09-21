import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

export default function CoverImage({ title, slug, url }) {
  const imageUrl = `${
    url.startsWith("/") ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ""
  }${url}`;

  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Image for ${title}`}
      src={imageUrl}
      className={cn("shadow-sm", {
        "hover:shadow-md transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      <Link href={`/blog/${slug}`}>
        {slug ? <a aria-label={title}>{image}</a> : image}
      </Link>
    </div>
  );
}
