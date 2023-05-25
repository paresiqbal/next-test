import Link from "next/link";

export default function Navbar() {
  return (
    <div className="p-5 flex gap-10">
      <Link href={"/"}>Home</Link>
      <Link href={"/views/about"}>About</Link>
      <Link href={"/post"}>Post</Link>
    </div>
  );
}
