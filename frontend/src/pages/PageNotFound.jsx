import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#d0d0d0] to-[#4b4b4b] text-center p-6 rounded-2xl">
      <h1 className="text-6xl font-bold text-white mb-4">404 🚫</h1>
      <p className="text-2xl text-gray-200 mb-6">Oops! Page Not Found</p>
      <Link
        to="/"
        className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl shadow-md transition"
      >
        🔙 Back to Home
      </Link>
    </div>
  )
}

export default PageNotFound