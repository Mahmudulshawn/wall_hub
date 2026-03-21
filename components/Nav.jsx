"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { user, signOut } = useAuth();
  const userInitial = user?.name?.charAt(0)?.toUpperCase() || "U";
  const avatarUrl = user?.prefs?.avatar || user?.providerAccessToken || "";
  console.log(avatarUrl);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // You can route or call API here
    // e.g., router.push(`/search?q=${searchQuery}`)
  };

  return (
    <nav className="w-full border-b bg-transparent backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"} className="text-2xl font-bold tracking-tight">
          <span className="text-white">Wall</span>
          <span className="text-purple-500">Hub</span>
        </Link>

        {/* Search Bar */}
        <div className="flex flex-1 justify-center px-6">
          <form
            className="relative w-full max-w-md"
            onSubmit={(e) => handleSearchSubmit(e)}
          >
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search beautiful wallpapers..."
              className="w-full bg-popover pl-10 pr-4 py-2 rounded-full outline outline-muted focus:ring-2 focus:ring-black/20"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e)}
            />
          </form>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="focus:outline-none">
                  <Avatar className="h-9 w-9 cursor-pointer">
                    <AvatarImage src={avatarUrl} alt={user.name} />
                    <AvatarFallback>{userInitial}</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-48">
                <div className="px-3 py-2 text-sm text-gray-500">
                  {user.name}
                </div>

                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/collections">My Collections</Link>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={signOut}
                  className="text-red-500 cursor-pointer"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href={"/login"}
              className="px-4 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition"
            >
              Join Now
            </Link>
          )}
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background px-4 pb-4 space-y-4">
          <div className="flex flex-col gap-3 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/collections">Collections</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="focus:outline-none">
                    <Avatar className="h-9 w-9 cursor-pointer">
                      <AvatarImage src={avatarUrl} alt={user.name} />
                      <AvatarFallback>{userInitial}</AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-3 py-2 text-sm text-gray-500">
                    {user.name}
                  </div>

                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link href="/collections">My Collections</Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onClick={signOut}
                    className="text-red-500 cursor-pointer"
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                href={"/login"}
                className="px-4 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition"
              >
                Join Now
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
