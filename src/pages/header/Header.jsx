import { useContext, useState } from "react";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import { LuLogOut } from "react-icons/lu";
import { FaUserPlus } from "react-icons/fa6";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { Link } from "react-router-dom";
import { StoreCard } from "../../store/Store";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useContext(StoreCard);

  return (
    <header className="fixed bg-white shadow-md w-full z-10">
      <nav
        aria-label="Global"
        className="container mx-auto flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to={"/"} className="-m-1.5 p-1.5">
            <h2 className="font-extrabold font-sans text-2xl">E-commerce</h2>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <FaBars aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Link
              to={"/"}
              className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
            >
              Home
            </Link>
          </Popover>

          <Link
            to={"/products"}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Products
          </Link>
          <Link to={"/about"} className="text-sm/6 font-semibold text-gray-900">
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <Link
            to={"/login"}
            className="flex gap-2 border-black border p-2 text-sm/6 font-semibold text-gray-900"
          >
            <LuLogOut aria-hidden="true" className="size-6" />
            Log in
          </Link>
          <Link
            to={"/register"}
            className="flex gap-2 border-black border p-2 text-sm/6 font-semibold text-gray-900"
          >
            <FaUserPlus aria-hidden="true" className="size-6" />
            Register
          </Link>
          <Link
            to={"/cart"}
            className="flex gap-2 border-black border p-2 text-sm/6 font-semibold text-gray-900"
          >
            <FaShoppingCart aria-hidden="true" className="size-6" />
            Cart({cart.length})
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>

              <h2 className="font-extrabold text-2xl">E-commerce</h2>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <IoMdClose aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <Link
                    to={"/"}
                    className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </Link>
                </Disclosure>
                <Link
                  to={"/products"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Products
                </Link>
                <Link
                  to={"/about"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  to={"/contact"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
              <div className="flex gap-4 py-6">
                <Link
                  to={"/login"}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
                <Link
                  to={"/register"}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Register
                </Link>
                <Link
                  to={"/cart"}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </header>
  );
}
