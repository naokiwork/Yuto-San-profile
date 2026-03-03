export default function Footer() {
  return (
    <footer className="bg-github-darkblue text-github-gray p-4 text-center text-sm mt-8">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Yuto Asai. All rights reserved.</p>
      </div>
    </footer>
  );
}
