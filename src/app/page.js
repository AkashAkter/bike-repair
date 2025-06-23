/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-800">
          PedalPro Bike Repair
        </h1>

        <p className="text-lg text-gray-600">
          Our website is getting a tune-up!
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                We're currently working on building our website. In the
                meantime, you can reach us at{" "}
                <span className="font-medium">repair@pedalpro.com</span>
                or call <span className="font-medium">(555) 123-4567</span>.
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          Check back soon for our full-service bike repair website!
        </p>
      </div>
    </div>
  );
}
