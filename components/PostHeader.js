import Author from "../components/Author";
import Date from "../components/Date";
import PostTitle from "../components/PostTitle";
import CoverImage from "../components/CoverImage";

export default function PostHeader({
  title,
  date,
  author,
  coverImage,
  updatedTime,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex items-center mb-1">
        <div className="text-sm text-gray-500 mr-1">
          Published on <Date dateString={date} /> | by
        </div>
        <Author name={author.name} />
      </div>
      <div className="text-sm text-gray-500 mr-1 mb-3">
        Updated on <Date dateString={updatedTime} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
    </>
  );
}
