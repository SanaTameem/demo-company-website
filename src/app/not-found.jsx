import Link from "next/link";

function NotFound() {
  return (
    <>
      <h1>NotFound</h1>
      <p>The page you are looking for is not found!</p>
      <Link href="/">Return Home</Link>
    </>
  );
}

export default NotFound;
