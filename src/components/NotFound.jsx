import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="px-6 py-20 md:py-28 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-lg mb-8 text-[#9ca3af]">
          This page doesn't exist.
        </p>
        <Link
          to="/"
          className="btn-primary inline-block px-6 py-2.5 font-medium text-sm rounded-md"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
