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
}

export function OfferList() {
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
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl lg:max-w-full mx-auto">
          {offerData.map((offer) => (
            <Link to={offer.slug} key={offer.id}>
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
                            Area: {offer.surface_area || "-"} m<sup>2</sup>
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
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
