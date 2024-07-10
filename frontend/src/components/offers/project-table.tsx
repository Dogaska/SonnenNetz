import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import { HeaderOffers } from "../common/header";
import { Link } from "react-router-dom";
import AxiosInstance from "../axios/AxiosInstance";
import { useState, useEffect, ReactNode } from "react";

// Define the Post interface according to the actual data structure
interface Post {
  offer_description: ReactNode;
  offer_excerpt: string;
  offer_type: string;
  id: number;
  slug: string;
  offer_name: string;
  location?: string;
  cover_image?: string;
  surface_area?: string;
  investment_amount?: string;
  status: string;
  start_date: string;
  progress?: number;
}

export function ProjectTable() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };

  const [offerData, setOfferData] = useState<Post[]>([]);

  const GetOfferData = () => {
    AxiosInstance.get(`api/offers/all/`)
      .then((res) => {
        if (res.data.results && Array.isArray(res.data.results)) {
          setOfferData(res.data.results);
          console.log(res.data.results);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch offer data:", error);
      });
  };

  useEffect(() => {
    GetOfferData();
  }, []);

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const monthNames = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    return `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  const getOfferStyle = (offer_type: string) => {
    switch (offer_type) {
      case "Surface Offer":
        return "bg-lime-100";
      case "Investment Offer":
        return "bg-sky-100";
      case "Project Offer":
        return "bg-yellow-100";
      default:
        return {};
    }
  };

  return (
    <div className="bg-white">
      <HeaderOffers />
      <div>
        <main className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 w-full ">
            <form className="w-full">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <MagnifyingGlassIcon
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full pr-20 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="Search Offers..."
                  required={false}
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="relative">
              <button
                type="button"
                onClick={toggleFilterDropdown}
                className="text-indigo-600 font-bold mt-2 mr-2 bg-white hover:bg-indigo-200 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 flex items-center"
              >
                Filters
                <ChevronDownIcon className="w-5 h-5 ml-2" />
              </button>
              {isFilterDropdownOpen && (
                <div
                  id="dropdownDefaultCheckbox"
                  className="absolute right-0 z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownCheckboxButton"
                  >
                    <li>
                      <div className="flex items-center">
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

            <div className="relative">
              <button
                type="button"
                onClick={toggleDropdown}
                className="text-white bg-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 flex items-center justify-center"
              >
                Create New
                <PlusCircleIcon className="h-5 w-5 ml-2" />
                <ChevronDownIcon className="w-5 h-5 ml-2" />
              </button>

              {isDropdownOpen && (
                <div
                  id="dropdown"
                  className="absolute right-0 z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <Link
                        to="/projects/investment-offer"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Investment Offer
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/projects/surface-offer"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Surface Offer
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Filters Modal */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-75">
              <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  {/* Filter content here */}
                  <button
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    Close
                  </button>
                  <h2 className="text-lg font-medium">Filters</h2>
                  {/* Implement filter UI */}
                </div>
              </div>
            </div>
          )}
          <div>
            {/* OFFER LIST */}
            <section className="py-24 relative">
              <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
                <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl lg:max-w-full mx-auto">
                  {offerData.map((offer) => (
                    <Link
                      to={
                        offer.offer_type === "Surface Offer"
                          ? `/projects/surface-details/${offer.slug}`
                          : offer.offer_type === "Investment Offer"
                          ? `/projects/investment-details/${offer.slug}`
                          : offer.offer_type === "Project Offer"
                          ? `/projects/project-details/${offer.slug}`
                          : `/offer/${offer.slug}`
                      }
                      key={offer.id}
                    >
                      <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                        <div className="ml-5 img-box w-full lg:max-w-[180px]">
                          <img
                            src={`http://localhost:8000${offer.cover_image}`}
                            alt={`${offer.offer_name} image`}
                            className="aspect-square w-full rounded-lg"
                          />
                        </div>
                        <div className="flex flex-row items-center w-full">
                          <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                            <div className="flex items-center">
                              <div>
                                <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                                  {offer.offer_name}
                                </h2>
                                <p className="font-normal text-lg leading-8 text-gray-500 mb-3">
                                  Location: {offer.location}
                                </p>
                                <div className="flex items-center">
                                  <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                    Area: {offer.surface_area || "-"} m
                                    <sup>2</sup>
                                  </p>
                                  <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                    Budget: {offer.investment_amount || "-"} €
                                  </p>
                                  <p
                                    className={`font-medium text-base leading-7 rounded-full px-3 text-black ${getOfferStyle(
                                      offer.offer_type
                                    )}`}
                                  >
                                    {offer.offer_type}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="grid grid-cols-5">
                              <div className="col-span-5 lg:col-span-2 flex items-center">
                                <div className="flex gap-3 lg:block">
                                  <p className="font-medium text-sm leading-7 text-black">
                                    Status
                                  </p>
                                  <p
                                    className={`font-medium text-sm leading-6 py-0.5 px-3 rounded-full lg:mt-3 bg-${offer.status.toLowerCase()}-50 text-${offer.status.toLowerCase()}-600`}
                                  >
                                    {offer.status}
                                  </p>
                                </div>
                              </div>
                              <div className="col-span-5 lg:col-span-2 flex items-center">
                                <div className="flex gap-3 lg:block">
                                  <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                                    Start Date
                                  </p>
                                  <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                                    {formatDate(offer.start_date)}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <p className="mt-5 line-clamp-3 text-base leading-6 text-gray-600">
                              {offer.offer_description}
                            </p>
                            {offer.progress !== undefined && (
                              <div className="relative">
                                <div className="w-64 bg-gray-200 rounded-full dark:bg-gray-700 mt-2">
                                  <div
                                    className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                    style={{ width: `${offer.progress}%` }}
                                  >
                                    {offer.progress}%
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
        <Pagination />
      </div>
    </div>
  );
}

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [1, 2, 3]; // This should be dynamically calculated based on data in a real app

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    // You would also fetch new data here if needed
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="mx-1 px-4 py-2 rounded text-white bg-indigo-500 border border-indigo-500 hover:bg-indigo-600"
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`mx-1 px-4 py-2 rounded ${
            currentPage === page
              ? "bg-indigo-500 text-white"
              : "bg-white text-indigo-500 border border-indigo-500"
          } hover:bg-indigo-600`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === pages.length}
        className="mx-1 px-4 py-2 rounded text-white bg-indigo-500 border border-indigo-500 hover:bg-indigo-600"
      >
        Next
      </button>
    </div>
  );
}
