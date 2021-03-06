import Image from "next/image";

export default function Avatar({ picture }) {
  const url = picture.url ?? picture[0].url;

  return (
    <div className="flex items-center">
      <div className="w-24 h-24 relative mr-4">
        <Image
          src={`${
            url.startsWith("/") ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ""
          }${url}`}
          className="rounded-full"
          layout="fill"
          alt={picture[0].alternativeText}
        />
      </div>
    </div>
  );
}
