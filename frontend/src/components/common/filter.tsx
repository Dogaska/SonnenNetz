import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export function Filter() {
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleFilterDropdown}
        className="mt-3 text-white bg-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 flex items-center justify-center"
      >
        Filters
        <ChevronDownIcon className="w-5 h-5 ml-2" />
      </button>
      {isFilterDropdownOpen && (
        <div
          id="dropdownDefaultCheckbox"
          className="absolute -left-2 z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownCheckboxButton"
          >
            <li>
              <div className="flex items-right">
                <input
                  id="checkbox-item-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="checkbox-item-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Investment Offer
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <input
                  id="checkbox-item-2"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="checkbox-item-2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Surface Offer
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <input
                  id="checkbox-item-3"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="checkbox-item-3"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Maximum Budget Limit
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <input
                  id="checkbox-item-4"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="checkbox-item-4"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Surface Area
                </label>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
