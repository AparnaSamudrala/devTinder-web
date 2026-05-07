export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <h1 className="text-4xl font-bold text-error">404</h1>
      <p className="mt-2 text-lg">Oops! Page not found.</p>
      <a href="/" className="btn btn-primary mt-4">
        Go Home
      </a>
    </div>
  );
}
