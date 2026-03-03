import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-github-darkblue text-github-lightgray p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-github-lightgray">
          Yuto Asai Profile
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/about" className="hover:text-github-blue">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-github-blue">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/writing" className="hover:text-github-blue">
                Writing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-github-blue">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
