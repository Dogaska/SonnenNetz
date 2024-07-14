import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AxiosInstance from "../../axios/AxiosInstance";

interface Post {
  max_investment_limit: string;
  investment_amount: string;
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
  images: {
    id: string;
    image: string;
  }[];
  files: {
    id: string;
    file: string;
  }[];
}

export function ProjectOfferDetails() {
  const { slug } = useParams();

  const [offerData, setOfferData] = useState<Post | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const GetOfferData = () => {
    AxiosInstance.get(`api/offers/${slug}`)
      .then((res) => {
        if (res.data) {
          setOfferData(res.data.surface_offer);
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

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % offerData.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? offerData.images.length - 1 : prevIndex - 1
    );
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "fullScreenImage") {
      return;
    }
    toggleFullScreen();
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        {/* Full Width Description */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {offerData.offer_name}
          </h2>
          <p className="mt-4 text-gray-500 text-fit">
            {offerData.offer_description}
          </p>
        </div>

        {/* Grid Layout for Details and Images */}
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-16">
          {/* Left Column for Text - Other details */}
          <div>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Surface Provider</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {offerData.author_username}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Location</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {offerData.location}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Surface Area</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {offerData.surface_area} m<sup>2</sup>
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Surface Type</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {offerData.surface_type}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Start Date</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {offerData.start_date}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">End Date</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {offerData.end_date}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Goal Budget</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {offerData.investment_amount} €
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Maximum Investment Limit per Investor
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {offerData.max_investment_limit} €
                </dd>
              </div>
              {/* Downloader details*/}
              <div className="lg:col-span-2">
                <dt className="font-medium text-gray-900 mb-2">Attachments</dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                  >
                    {offerData.files.map((file) => {
                      const fileName = file.file.split("/").pop();
                      return (
                        <li
                          key={file.id}
                          className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6 hover:bg-indigo-100"
                        >
                          <div className="flex w-0 flex-1 items-center">
                            <PaperClipIcon
                              className="h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                              <a href={`http://localhost:8000${file.file}`}>
                                <span className="truncate font-medium">
                                  {fileName}
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <a
                              href={`http://localhost:8000${file.file}`}
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              download={fileName}
                            >
                              Download
                            </a>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>

          {/* Right Column for Images - Slider */}
          <div className="relative">
            {offerData.images.length > 0 && (
              <div className="relative">
                <img
                  src={`http://localhost:8000${offerData.images[currentImageIndex].image}`}
                  className="rounded-lg w-full max-h-96 object-cover"
                  alt="Surface Offer"
                  onClick={toggleFullScreen}
                />
                {isFullScreen && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={handleOverlayClick}
                  >
                    <img
                      src={`http://localhost:8000${offerData.images[currentImageIndex].image}`}
                      className="max-w-full max-h-full cursor-pointer"
                      alt="Fullscreen Image"
                      onClick={toggleFullScreen} // Allows clicking the image again to exit full-screen
                    />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                  {Array.from({ length: offerData.images.length }).map(
                    (_, idx) => (
                      <span
                        key={idx}
                        className={`inline-block h-3 w-3 rounded-full mx-2 ${
                          currentImageIndex === idx
                            ? "bg-indigo-500"
                            : "bg-gray-300"
                        }`}
                        aria-hidden="true"
                      />
                    )
                  )}
                </div>
                <button
                  onClick={prevImage}
                  className="absolute inset-y-0 left-2 my-auto flex items-center justify-center bg-white bg-opacity-75 p-2 rounded-full shadow cursor-pointer text-indigo-500 text-xl"
                  aria-label="Previous Image"
                  style={{ width: "40px", height: "40px", fontSize: "24px" }}
                >
                  &#8592;
                </button>
                <button
                  onClick={nextImage}
                  className="absolute inset-y-0 right-2 my-auto flex items-center justify-center bg-white bg-opacity-75 p-2 rounded-full shadow cursor-pointer text-indigo-500 text-xl"
                  aria-label="Next Image"
                  style={{ width: "40px", height: "40px", fontSize: "24px" }}
                >
                  &#8594;
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Apply Button */}
        <div className="mt-6 flex justify-start gap-x-6 w-full h-12 text-base font-semibold leading-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Apply to the project offer
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Contact with project owner
          </button>
        </div>
      </div>
    </div>
  );
}
