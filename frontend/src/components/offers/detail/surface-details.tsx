import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AxiosInstance from "../../axios/AxiosInstance";
import {
  project_features_data,
  project_features_image_data,
  project_features_download_data,
} from "../../../../data/offer_features_data";

interface Post {
  max_investment_limit: ReactNode;
  investment_amount: ReactNode;
  file_upload: string;
  surface_type: string;
  surface_area: string;
  author_username: string;
  created_by: string;
  end_date: string;
  start_date: string;
  location: string;
  offer_description: string;
  text: string;
  name: string;
  size: string;
  offer_name: string;
  slug: string;
  excerpt: string;
  cover_image: string;
}

export function SurfaceOfferDetails() {
  const { slug } = useParams();

  // retrieveing investment offer details
  const [offerData, setOfferData] = useState<Post[]>([]);

  const GetOfferData = () => {
    AxiosInstance.get(`api/offers/${slug}`)
      .then((res) => {
        if (res.data) {
          setOfferData([res.data.surface_offer]);
          console.log(res.data.surface_offer);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch investment offer data:", error);
      });
  };

  useEffect(() => {
    GetOfferData();
  }, [slug]);

  return (
    <div className="bg-white">
      {offerData.map((offer, index) => (
        <div
          key={index}
          className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
        >
          {/* Full Width Description */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {offer.offer_name}
            </h2>
            <p className="mt-4 text-gray-500">{offer.offer_description}</p>
          </div>

          {/* Grid Layout for Details and Images */}
          <div className="grid lg:grid-cols-2 gap-x-8 gap-y-16">
            {/* Left Column for Text - Other details */}
            <div>
              <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">
                    Surface Provider
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {offer.author_username}
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Location</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {offer.location}
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Surface Area</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {offer.surface_area} m<sup>2</sup>
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Surface Type</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {offer.surface_type}
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Start Date</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {offer.start_date}
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">End Date</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {offer.end_date}
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Goal Budget</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {offer.investment_amount} €
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">
                    Maximum Investment Limit per Investor
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {offer.max_investment_limit} €
                  </dd>
                </div>
                {/* Downloader details*/}
                <div className="lg:col-span-2">
                  <dt className="font-medium text-gray-900">Attachments</dt>
                  <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <ul
                      role="list"
                      className="divide-y divide-gray-100 rounded-md border border-gray-200"
                    >
                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                          <PaperClipIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="truncate font-medium">
                              {offer.name}
                            </span>
                            <span className="flex-shrink-0 text-gray-400">
                              {offer.file_upload}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href=""
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Download
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Right Column for Images - Closely spaced */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
              {project_features_image_data.map((image) => (
                <img
                  key={image.id}
                  src={image.url}
                  alt={image.text}
                  className="rounded-lg bg-gray-100 w-64 h-48"
                />
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="mt-6 flex justify-start gap-x-6 w-full h-12 text-base font-semibold leading-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Apply to the surface offer
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact with surface owner
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
