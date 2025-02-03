

// import Link from "next/link";

// export default function AlertBanner() {
  
//   return (
//     <div
//       className= "fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur"
//     >
//       <div
//       className= "fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur flex justify-center items-center px-4 h-28">
//       <div className="py-2 text-center text-sm">
//         BLOGS
//       </div>
//       <nav>
//       <Link href="/">Home</Link>
//       <Link href="/about" >About</Link>
//       <Link href="/contact">Contact</Link>
//       </nav>



//     </div>
//     </div>
//   );
// }


import Link from "next/link";

export default function AlertBanner() {
  return (
    <div className=" top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur">
      <div className="flex justify-between items-center px-6 h-16 max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="text-lg font-bold">
          <Link href="/">BLOGS</Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-500 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-500 transition">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
