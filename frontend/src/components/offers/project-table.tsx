import { HeaderOffers } from "../common/header";
import { OfferList } from "./offer-list";
import { NewOffer } from "./create_new_offer";
import { SearchBar } from "../common/search_bar";
import { Filter } from "../common/filter";
import AxiosInstance from "../axios/AxiosInstance";
import { useState, useEffect } from "react";
import { Pagination } from "../common/pagination";

interface Offer {
  progress: string;
  offer_description: string;
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
}

const filterOptions = [
  {
    key: "offer_type",
    options: [
      { label: "Select Category", value: "" },
      { label: "Surface Offer", value: "Surface Offer" },
      { label: "Investment Offer", value: "Investment Offer" },
    ],
  },
  {
    key: "status",
    options: [
      { label: "Select Status", value: "" },
      { label: "Pre verification", value: "Surface Offer" },
      { label: "Active", value: "Active" },
      { label: "Post verification", value: "Post verification" },
      { label: "Completed", value: "Completed" },
    ],
  },
];

export function ProjectTable() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [offerData, setOfferData] = useState<Offer[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ offer_type: "", status: "" });

  const GetOfferData = () => {
    let queryParams = `page=${currentPage}`;
    queryParams += search ? `&search=${encodeURIComponent(search)}` : "";
    queryParams += filters.offer_type
      ? `&offer_type=${encodeURIComponent(filters.offer_type)}`
      : "";
    queryParams += filters.status
      ? `&status=${encodeURIComponent(filters.status)}`
      : "";

    AxiosInstance.get(`http://localhost:8000/api/offers/?${queryParams}`)
      .then((res) => {
        if (res.data.results && Array.isArray(res.data.results.result)) {
          setOfferData(res.data.results.result);
          console.log(res.data.results.result);
          setTotalPages(res.data.results.total_pages);
          setIsDataLoaded(true);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch offer data:", error);
      });
  };

  useEffect(() => {
    GetOfferData();
  }, [currentPage, search, filters]);
  return (
    <div className="bg-white">
      <HeaderOffers />
      <SearchBar onSearch={setSearch} barText="Search offers..." />
      <div className="mx-auto max-w-7xl px-4 lg:px-8 flex justify-between items-center">
        <Filter setFilters={setFilters} filterData={filterOptions} />
        <NewOffer />
      </div>
      <OfferList offerData={offerData} isDataLoaded={isDataLoaded} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
