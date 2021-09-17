import Meta from "./Meta";
// TODO: Add the navbar, header, breadcrumbs and footer
export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  );
}
