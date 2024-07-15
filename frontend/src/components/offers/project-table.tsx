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
    key: "category",
    options: [
      { label: "Select Category", value: "" },
      { label: "Surface Offer", value: "Surface Offer" },
      { label: "Investment Offer", value: "Investment Offer" },
    ],
  },
];

export function ProjectTable() {
  const numOfferPerPage = 12;
  const [offerData, setOfferData] = useState<Offer[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ category: "", level: "" });

  const GetOfferData = () => {
    let queryParams = `page=${currentPage}`;
    queryParams += search ? `&search=${encodeURIComponent(search)}` : "";
    queryParams += filters.category
      ? `&category=${encodeURIComponent(filters.category)}`
      : "";
    queryParams += filters.level
      ? `&level=${encodeURIComponent(filters.level)}`
      : "";

    AxiosInstance.get(`http://localhost:8000/api/offers/?${queryParams}`)
      .then((res) => {
        if (res.data.results && Array.isArray(res.data.results)) {
          setOfferData(res.data.results);
          setTotalPages(Math.ceil(res.data.count / numOfferPerPage));
        }
      })
      .catch((error) => {
        console.error("Failed to fetch offer data:", error);
      });
  };

  useEffect(() => {
    GetOfferData();
  }, [currentPage]);
  return (
    <div className="bg-white">
      <HeaderOffers />
      <SearchBar onSearch={setSearch} barText="Search offers..." />
      <div className="mx-auto max-w-7xl px-4 lg:px-8 flex justify-between items-center">
        <Filter setFilters={setFilters} filterData={filterOptions} />
        <NewOffer />
      </div>
      <OfferList offerData={offerData} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
