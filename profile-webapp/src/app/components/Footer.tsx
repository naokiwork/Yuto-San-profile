export default function Footer() {
  return (
    <footer className="bg-dark text-light-400 p-4 text-center text-sm mt-12">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
