import { PaperClipIcon } from "@heroicons/react/20/solid";

import {
  project_features_data,
  project_features_image_data,
  project_features_download_data,
} from "../../../../data/offer_features_data";

function ProjectOfferDetails() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        {/* Full Width Project Description */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {
              project_features_data.find(
                (feature) => feature.title === "Project Description"
              )?.title
            }
          </h2>
          <p className="mt-4 text-gray-500">
            {
              project_features_data.find(
                (feature) => feature.title === "Project Description"
              )?.text
            }
          </p>
        </div>

        {/* Grid Layout for Details and Images */}
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-16">
          {/* Left Column for Text - Other details */}
          <div>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {project_features_data.map(
                (feature) =>
                  feature.title !== "Project Description" && (
                    <div
                      key={feature.title}
                      className="border-t border-gray-200 pt-4"
                    >
                      <dt className="font-medium text-gray-900">
                        {feature.title}
                      </dt>
                      <dd className="mt-2 text-sm text-gray-500">
                        {feature.text}
                      </dd>
                    </div>
                  )
              )}
              {/* Downloader details*/}
              <div className="lg:col-span-2">
                <dt className="font-medium text-gray-900">Attachments</dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                  >
                    {project_features_download_data.map((document, index) => (
                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                          <PaperClipIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <div
                            className="ml-4 flex min-w-0 flex-1 gap-2"
                            key={index}
                          >
                            <span className="truncate font-medium">
                              {document.name}
                            </span>
                            <span className="flex-shrink-0 text-gray-400">
                              {document.size} mb
                            </span>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href={document.url}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Download
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>

          {/* Right Column for Images - Closely spaced */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4">
            {project_features_image_data.map((image) => (
              <img
                key={image.id}
                src={image.url}
                alt={image.text}
                className="rounded-lg bg-gray-100"
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
            Apply to the project
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

export { ProjectOfferDetails };
