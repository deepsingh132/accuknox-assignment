import React from "react";
import { useSearch } from "./context/SearchContext";
import { BellRing, ChevronRight, CircleUser, Menu, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

/**
 * Header component for the dashboard
 */
const Header: React.FC = () => {

  const { search, setSearch } = useSearch();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path

  return (
    <header className="flex fixed top-0 z-[50] h-[50px] mb-20 w-full justify-between items-center p-4 bg-white shadow">
      <h2 className="flex items-center md:gap-0 gap-2 whitespace-nowrap font-semibold">
        <Link
          to="/"
          className={`md:inline-block hidden cursor-pointer ${
            isActive("/") ? "text-primary" : "text-gray-500"
          }`}
        >
          Home
        </Link>
        <ChevronRight className="md:inline-block hidden font-semibold w-5 h-5 ml-1 text-gray-500" />
        <div className="md:hidden inline-block hover:iconHover p-2 cursor-pointer">
          <Menu className="w-5 h-5 text-gray-500" />
        </div>
        <Link
          to="/dashboard"
          onClick={() => {}}
          className={`cursor-pointer ml-1 ${
            isActive("/dashboard") ? "text-primary" : "text-gray-500"
          }`}
        >
          Dashboard V2
        </Link>
      </h2>
      <div className="flex w-full mx-auto lg:gap-4 items-center justify-end space-x-2">
        <div className="md:flex hidden searchBox items-center px-2 ml-2 bg-[#f0f5fa] w-2/5 focus-within:border-primary p-1 rounded-lg border-2 border-gray-200">
          <Search className="w-5 h-5 text-[#a9bdcc]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search anything..."
            className="bg-transparent ml-2 outline-none w-full"
          />
        </div>
        <div className="selector md:inline-block hidden lg:px-2">
          <select
            className="selector bg-transparent outline-none focus-within:outline focus-within:outline-primary p-1 px-6 rounded-lg"
            name=""
            id=""
            defaultValue="Lorem ipsum"
          >
            <option value="Lorem ipsum">Lorem ipsum</option>
            <option value="Lorem ipsum">Lorem ipsum</option>
            <option value="Lorem ipsum">Lorem ipsum</option>
            <option value="Lorem ipsum">Lorem ipsum</option>
          </select>
        </div>
        <div className="hover:iconHover md:block hidden p-2">
          <BellRing className="w-5 h-5 text-[#a9bdcc]" />
        </div>
        <div className="flex gap-4 items-center whitespace-nowrap hover:iconHover p-2">
          <CircleUser className="w-5 h-5 text-[#a9bdcc]" />
          John Doe
        </div>
      </div>
    </header>
  );
};

export default Header;
