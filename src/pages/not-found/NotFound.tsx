import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white p-4">
      <h1 className="text-9xl font-bold text-gray-200">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page not found</h2>
      <p className="text-lg text-gray-500 mt-2 text-center">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-700"
      >
        BACK TO HOMEPAGE
      </Link>
    </div>
  );
};

export default NotFoundPage;
