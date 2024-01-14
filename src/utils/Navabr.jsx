import  { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-16 flex flex-col sm:flex-row items-center justify-between font-inter">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <div className="flex items-center justify-start gap-4">
          <div className="flex items-center justify-start">
            <div className="flex items-center justify-center p-2">
              <div className="font-semibold">Branch name</div>
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none focus:ring z-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm font-poppins">
          <Link
            to="/dashboard"
            className=" no-underline rounded-lg bg-white px-2 py-1 text-gray-200 hover:bg-slate-50 focus:outline-none focus:ring focus:border-blue-300 "
          >
            Dashboard
          </Link>
          <Link
            to="/sales"
            className="  hover:bg-slate-50  rounded-lg  no-underline px-2 py-1 hover:text-gray-300 focus:outline-none focus:ring text-whitesmoke"
          >
            Sales
          </Link>
          <Link
            to="/payment"
            className=" no-underline rounded-lg hover:bg-slate-50  px-2 py-1 hover:text-gray-300 focus:outline-none focus:ring text-whitesmoke"
          >
            Payment
          </Link>
          <Link
            to="/tax"
            className=" no-underline rounded-lg hover:bg-slate-50  px-2 py-1 hover:text-gray-300 focus:outline-none focus:ring text-whitesmoke"
          >
            Tax
          </Link>
          <Link
            to="/mis"
            className=" no-underline rounded-lg hover:bg-slate-50  px-2 py-1 hover:text-gray-300 focus:outline-none focus:ring text-whitesmoke"
          >
            MIS
          </Link>
          <Link
            to="/purchase-entry"
            className=" no-underline rounded-lg  hover:bg-slate-50 px-2 py-1 text-whitesmoke hover:text-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          >
            Purchase entry
          </Link>
        </div>
      </div>

      {/* Responsive Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden fixed top-0 left-0 right-0  w-screen z-40  bg-cyan-500 text-white p-4`}
      >
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none focus:ring z-50 s"
          >
            X
          </button>
        </div>
        <Link
          to="/dashboard"
          className="block py-2 no-underline rounded-lg hover:bg-slate-50  px-2  hover:text-gray-300 focus:outline-none focus:ring text-whitesmoke"
        >
          Dashboard
        </Link>
        <Link
          to="/sales"
          className="block py-2 no-underline rounded-lg hover:bg-slate-50  px-2  hover:text-gray-300 focus:outline-none focus:ring text-whitesmoke"
        >
          Sales
        </Link>
        <Link
          to="/payment"
          className="block py-2 no-underline rounded-lg hover:bg-slate-50  px-2 hover:text-gray-300 focus:outline-none focus:ring text-whitesmoke"
        >
          Payment
        </Link>
        <Link
          to="/tax"
          className="block py-2 no-underline rounded-lg hover:bg-slate-50  px-2  hover:text-gray-300 focus:outline-none focus:ring text-whitesmoke"
        >
          Tax
        </Link>
        <Link
          to="/mis"
          className="block py-2 no-underline rounded-lg hover:bg-slate-50  px-2  hover:text-gray-300 focus:outline-none focus:ring text-whitesmoke"
        >
          MIS
        </Link>
        <Link
          to="/purchase-entry"
          className="block py-2 no-underline rounded-lg hover:bg-slate-50  px-2  hover:text-gray-300 focus:outline-none focus:ring text-whitesmoke"
        >
          Purchase entry
        </Link>
      </div>
      <div className="flex items-center justify-end pr-4">
        <div className="px-2 py-0.5">
          <div className="relative text-sm">Export to excel</div>
        </div>
        <div className="overflow-hidden">
          <img className="w-3 h-3 object-cover" alt="" src="/img_close.svg" />
        </div>
      </div>
      <div className="flex items-center text-white">
        <div className="w-auto">
          <div className="flex-1 relative text-sm">
            Last updated time 09-Aug-2023 08:09 AM
          </div>
        </div>
        <img
          className="w-4 h-4 ml-3 object-cover"
          alt=""
          src="/img_refreshfill0w.svg"
        />
      </div>
      <div className="overflow-hidden">
        <img className="w-3 h-3 object-cover" alt="" src="/vector@2x.png" />
      </div>
    </div>
  );
}

export default Navbar;
