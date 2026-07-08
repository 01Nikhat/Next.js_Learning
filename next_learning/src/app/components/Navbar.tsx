import Link from "next/link"

export const Navbar =()=>{
const session = false;

  return <nav className="bg-white shadow-sm">
    <div className="container mx-auto p-4 flex justify-between items-center ">
      <div className="text-xl font-bold text-gray-800">
        <Link href="/" className="text-xl font-bold text-blue-600">
        Conatct Manager
        </Link>
      </div>
      <div className="flex items-center space-x-4"
      >
        {session ? (
          <>
            <Link href="/contact" className="hover:text-blue-600 mr-8" >Contact</Link>
          </>
        ):(
          <>
            <Link href="/login" className="hover:text-blue-600 mr-5">Login</Link>
            <Link href="/register" className="hover:text-blue-600">Register</Link>
          </>
        )}
       
      </div>
    </div>
  </nav>
  
}