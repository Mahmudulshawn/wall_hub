"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // You can route or call API here
    // e.g., router.push(`/search?q=${searchQuery}`)
  };

  return (
    <nav className="w-full border border-gray-600 bg-gray-800/70 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href={'/'} className="text-2xl font-bold tracking-tight">
          <span className="text-white">Wall</span>
          <span className="text-purple-500">Hub</span>
        </Link>

        {/* Search Bar */}
        <div className="flex flex-1 justify-center px-6">
          <form className="relative w-full max-w-md" onSubmit={(e) => handleSearchSubmit(e)}>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" size={18} />
            <input
              type="text"
              placeholder="Search wallpaper..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e)}
            />
          </form>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/login" className="px-4 py-2 rounded-full text-gray-200 hover:text-black hover:bg-purple-200 transition">
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4">


          <div className="flex flex-col gap-3 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/collections">Collections</Link>
            <Link href="/login">Sign In</Link>
            <Link
              href="/signup"
              className="px-4 py-2 rounded-full bg-black text-white text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
