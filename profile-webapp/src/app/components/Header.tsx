import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-github-darkblue text-github-lightgray p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-light">
          Portfolio
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#projects" className="hover:text-primary transition-colors duration-200">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition-colors duration-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
