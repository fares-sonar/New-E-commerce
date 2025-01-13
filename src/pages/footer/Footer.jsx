import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <Link to={"/"} className="-m-1.5 p-1.5">
              <h2 className="font-extrabold font-sans text-2xl">E-commerce</h2>
            </Link>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
