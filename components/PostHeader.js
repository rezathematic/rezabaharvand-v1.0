import Avatar from "../components/Avatar";
import Date from "../components/Date";
import PostTitle from "../components/PostTitle";
import CoverImage from "../components/CoverImage";

export default function PostHeader({ title, date, author, coverImage }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-3">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-12 text-sm text-gray-500">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
