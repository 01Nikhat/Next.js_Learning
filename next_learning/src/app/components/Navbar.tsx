import Link from "next/link"

export const Navbar =()=>{
const session = true;

  return <nav className="bg-white shadow-sm">
    <div className="container mx-auto p-4 flex justify-between items-center ">
      <div className="text-xl font-bold text-gray-800">
        <Link href="/" className="text-xl font-bold text-blue-600">
        Conatct Manager
        </Link>
      </div>
      <div className="flex items-center space-x-4"
      >
        
        <a href="/" className="text-gray-600 hover:text-green-900">
        Home</a>
        <a href="/contact/new" className="text-gray-600 hover:text-gray-900">New Contact</a>
        <a href="/login" className="text-gray-600 hover:text-gray-900">Login</a>
      </div>
    </div>
  </nav>
  
}