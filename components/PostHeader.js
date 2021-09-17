import Avatar from "../components/Avatar";
import Date from "../components/Date";
import PostTitle from "../components/PostTitle";

export default function PostHeader({ title, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">{/* TODO: Add Cover Image */}</div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Avatar />
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
