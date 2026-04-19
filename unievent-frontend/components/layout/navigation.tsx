"use client"
import { Activity, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-col max-h-screen">
        <header className="h-16 border-b p-4 bg-black flex items-center justify-between border-grey-100">
          {/* Logo + Title */}
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-violet-600 rounded-md flex items-center justify-center ml-8">
              <Activity size={17} color="white" strokeWidth={2} />
            </div>
            <h1 className="text-2xl font-bold text-violet-700 tracking-tight">UniEvent</h1>
            <a href="/about" className="px-4 py-2 text-white md:flex hidden text-sm">Explore</a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 items-center text-white font-light text-sm ml-auto">
            <a href="/about">Log in</a>
            <a href="/Service" className="bg-gradient-to-t from-sky-500 to-indigo-500 rounded-md px-3 py-2">
              Sign up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="flex flex-col bg-black text-white font-light text-sm md:hidden">
            <a href="/about" className="px-4 py-2 border-b">Explore</a>
            <a href="/about" className="px-4 py-2 border-b">Log in</a>
            <a href="/Service" className="px-4 py-2 bg-gradient-to-t from-sky-500 to-indigo-500 rounded-md m-2 text-center">
              Sign up
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
