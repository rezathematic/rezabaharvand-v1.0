import Meta from "./Meta";
import Navbar from "./Navbar";
// TODO: Add the navbar, header, breadcrumbs and footer
export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navbar />
        <main className="mt-6 md:mt-12">{children}</main>
      </div>
    </>
  );
}
