export function BlogTemplate() {
  return (
    <>
      <main className="pt-8 pb-16 mt-8 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-8 mx-auto max-w-screen-lg ">
          <article className="mx-auto w-full max-w-max format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="ml-auto mb-6 lg:mb-6 ">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      Jese Leos
                    </a>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      Educator &amp; SonnenNetz
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <time
                        pubdate=""
                        dateTime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        June 16, 2024
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                Financing Community Energy – A short guide for banks
              </h1>
            </header>
            <p className="lead">
              Community energy projects, just like traditional projects, run
              through different stages in their lifetime, and each stage comes
              with specific needs, including financing. It is typically in the
              implementation stage, when licenses have been obtained, studies
              have been conducted and construction works are ready to start,
              that energy communities look for bank loans to cover a part of
              their investments.
            </p>

            <figure className="flex mt-5">
              <img
                src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                alt=""
              />
            </figure>

            <p className="mt-5">
              This finance guide for bank representatives helps banks and other
              representatives of financial institutions better understand the
              specific context and (financial) needs of energy communities. The
              guide sets out some of the key questions bankers institutions
              might ask themselves before engaging with energy communities and
              funding community energy projects. What is community energy? Why
              is it important in the first place, and how does it work exactly?
              It discusses the potential risks that come with community energy
              projects and looks into strategies to overcome or minimise those.
              Risk mitigation strategies like guarantees, power purchase
              agreements or special purpose vehicles get the attention they
              deserve, whilst looking into different ways energy communities
              make money. Finally, some of the most successful collaborations
              between banks and energy communities are presented.
            </p>

            <p>
              The target audience of this guide are bank representatives and
              other related financial institutions who want to get familiar with
              community energy as a stable and yet future oriented field of
              activity and who are looking for inspiration to pursue a
              collaboration with energy communities. As an energy community, you
              can use it to inform banks on financing community energy and
              convince them to consider supporting your project.
            </p>

            <p>
              Source:{" "}
              <a className="italic" href="https://www.sccale203050.eu/">
                SCCALE 203050 project
              </a>{" "}
            </p>

            <section className="not-format">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg mt-6 lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Discussion (20)
                </h2>
              </div>
              <form className="mb-6">
                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows={6}
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..."
                    required=""
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                  Post comment
                </button>
              </form>
              <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough"
                      />
                      Michael Gough
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <time
                        pubdate=""
                        dateTime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment1Button"
                    data-dropdown-toggle="dropdownComment1"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span className="sr-only">Comment settings</span>
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="dropdownComment1"
                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>
                  Very straight-to-point article. Really worth time reading.
                  Thank you! But tools are just the instruments for the UX
                  designers. The knowledge of the design tools are as important
                  as the creation of the design strategy.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      className="mr-1.5 w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article className="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="Jese Leos"
                      />
                      Jese Leos
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <time
                        pubdate=""
                        dateTime="2022-02-12"
                        title="February 12th, 2022"
                      >
                        Feb. 12, 2022
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment2Button"
                    data-dropdown-toggle="dropdownComment2"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span className="sr-only">Comment settings</span>
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="dropdownComment2"
                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>Much appreciated! Glad you liked it ☺️</p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      className="mr-1.5 w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article className="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie Green"
                      />
                      Bonnie Green
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <time
                        pubdate=""
                        dateTime="2022-03-12"
                        title="March 12th, 2022"
                      >
                        Mar. 12, 2022
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment3Button"
                    data-dropdown-toggle="dropdownComment3"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span className="sr-only">Comment settings</span>
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="dropdownComment3"
                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>
                  The article covers the essentials, challenges, myths and
                  stages the UX designer should consider while creating the
                  design strategy.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      className="mr-1.5 w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                        alt="Helene Engels"
                      />
                      Helene Engels
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <time
                        pubdate=""
                        dateTime="2022-06-23"
                        title="June 23rd, 2022"
                      >
                        Jun. 23, 2022
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment4Button"
                    data-dropdown-toggle="dropdownComment4"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  <div
                    id="dropdownComment4"
                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>
                  Thanks for sharing this. I do came from the Backend
                  development and explored some of the tools to design my Side
                  Projects.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      className="mr-1.5 w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
            </section>
          </article>
        </div>
      </main>
      <aside
        aria-label="Related articles"
        className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Related articles
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <article className="max-w-xs">
              <a href="#">
                <img
                  src="../src/assets/images/blogPost1.png"
                  className="mb-5 rounded-lg"
                  alt="Image 1"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="https://energycommunityplatform.eu/resources/coop-kit/">
                  Coop-kit
                </a>
              </h2>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Coop-kit is a free digital toolkit for cooperatives and local
                authorities involved in energy efficiency renovations. Source:
                RHEDCOOP.
              </p>
              <a
                href="https://energycommunityplatform.eu/resources/coop-kit/"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 2 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <img
                  src="./src/assets/images/blogPost2.png"
                  className="mb-5 rounded-lg"
                  alt="Image 2"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="https://citizenenergy.academy/course/course-1-introduction-to-citizen-energy/">
                  Online course: Introduction to citizen energy
                </a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                This online course introduces the concept of citizen energy:
                what it is and what you can change with it. (EUCENA - European
                Citizen Energy Academy)
              </p>
              <a
                href="https://energycommunityplatform.eu/resources/online-course-introduction-to-citizen-energy/"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 5 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <img
                  src="../src/assets/images/blogPost3.png"
                  className="mb-5 rounded-lg"
                  alt="Image 3"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="https://communityenergyacademy.eu/energy-citizenship-empowerment-kits/">
                  Energy citizen empowerment kit [English]
                </a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                The Energy citizen empowerment kit is a free, gamified tool that
                triggers and guides discussion about barriers to participation
                in energy communities.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 8 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <img
                  src="../src/assets/images/blogPost4.png"
                  className="mb-5 rounded-lg"
                  alt="Image 4"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="https://visitors-centre.jrc.ec.europa.eu/en/media/tools/recxploration-discover-world-renewable-energy-communities">
                  RECxploration
                </a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                RECxploration is an interactive and educational online game that
                shows how energy choices can change consumption and explains how
                to engage with energy communities.
              </p>
              <a
                href="https://energycommunityplatform.eu/resources/recxploration/"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 4 minutes
              </a>
            </article>
          </div>
        </div>
      </aside>
    </>
  );
}
