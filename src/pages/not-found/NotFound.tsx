
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-9xl font-bold text-gray-200">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page not found</h2>
      <p className="text-lg text-gray-500 mt-2">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-2 bg-green-700 text-white font-semibold rounded hover:bg-green-800"
      >
        BACK TO HOMEPAGE
      </a>
    </div>
  );
};

export default NotFoundPage;
