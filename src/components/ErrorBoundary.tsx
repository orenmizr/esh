import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

function ErrorFallback() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h2 className="text-2xl font-bold text-red-500 mb-4">Oops! Something went wrong</h2>
      <p className="text-gray-600">Please try refreshing the page</p>
    </div>
  );
}

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}