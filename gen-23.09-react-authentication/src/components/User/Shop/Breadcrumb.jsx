import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Breadcrumb(props) {
  return (
    <div className="flex bg-color1 mt-2 items-center">
      <div className="flex justify-center items-center ml-20">
        <nav className="text-sm sm:text-base p-4 md:p-6 lg:p-6">
          <ol className="list-none p-0 inline-flex space-x-2">
            <li className="flex items-center">
              <Link to="/shop">
                <div className="text-gray-600 hover:text-color1_selected transition-colors duration-300">
                  Shop
                </div>
              </Link>
              <span className="mx-2"> {">"} </span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-800">{props.title}</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
