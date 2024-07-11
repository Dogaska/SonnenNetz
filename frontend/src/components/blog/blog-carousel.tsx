export function BlogCarousel() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n        .swiper-slide.swiper-slide-active>.slide\\:w-full {\n            width: 100%;\n        }\n\n        .swiper-button-prev:after,\n        .swiper-rtl .swiper-button-next:after {\n            content: "" !important;\n        }\n        .swiper-wrapper {\n            height: max-content !important;\n            \n        }\n\n        .swiper-button-next:after,\n        .swiper-rtl .swiper-button-prev:after {\n            content: "" !important;\n        }\n\n        .swiper-button-next,\n        .swiper-button-prev {\n            position: relative !important;\n        }\n    ',
        }}
      />
      <section className="py-12 relative">
        <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
          <div className="flex items-center justify-between flex-col sm:flex-row gap-y-4 mb-5">
            <h2 className="font-manrope font-bold text-4xl text-gray-900">
              Do you want to learn more about energy communities?
            </h2>
            <div className="flex justify-center items-center gap-6">
              <button className="swiper-button-prev rounded-full w-9 h-9 flex items-center justify-center p-2.5 bg-indigo-200 group transition-all duration-300 hover:bg-indigo-600">
                <svg
                  className="stroke-indigo-700 transition-all duration-300 group-hover:stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.38449 15.1023L3.33337 10.0512M3.33337 10.0512L8.38449 5.00006M3.33337 10.0512H18.3333"
                    stroke=""
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="swiper-button-next rounded-full w-9 h-9 flex items-center justify-center p-2.5 bg-indigo-200 group transition-all duration-300 hover:bg-indigo-600">
                <svg
                  className="stroke-indigo-700 transition-all duration-300 group-hover:stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M11.6155 5.00006L16.6667 10.0512M16.6667 10.0512L11.6155 15.1023M16.6667 10.0512L1.66675 10.0512"
                    stroke=""
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <p className="font-normal text-base text-gray-500 max-w-4xl max-sm:text-center">
            You can visit our resources to learn more.
          </p>
        </div>
        <div className="swiper mySwiper mb-10 py-10">
          <div className="swiper-wrapper">
            <section className="py-20 relative">
              <div className="w-full max-w-2xl lg:max-w-7xl px-6 lg:px-8 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="flex items-center flex-col gap-8 w-full group">
                    <div className="block">
                      <img
                        src="https://pagedone.io/asset/uploads/1707480017.png"
                        alt="Project Achievements of Sketch"
                      />
                    </div>
                    <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                      <div className="block">
                        <h4 className="text-2xl font-manrope font-semibold text-gray-900 mb-1">
                          Where to start?
                        </h4>
                        <p className="font-medium text-lg text-gray-400">
                          Initial steps to create an energy community.
                        </p>
                      </div>
                      <button className=" border border-black py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black">
                        <svg
                          className="stroke-black transition-all duration-300 group-hover:stroke-white"
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={16}
                          viewBox="0 0 17 16"
                          fill="none"
                        >
                          <path
                            d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                            stroke=""
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="group flex items-center flex-col gap-8 w-full">
                    <div className="block">
                      <img
                        src="https://pagedone.io/asset/uploads/1707480034.png"
                        alt="Project Achievements of Figma"
                      />
                    </div>
                    <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                      <div className="block">
                        <h4 className="text-2xl font-manrope font-semibold text-gray-900 mb-1">
                          Regulatories
                        </h4>
                        <p className="font-medium text-lg text-gray-400">
                          Political & legal
                        </p>
                      </div>
                      <button className=" border border-black py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black">
                        <svg
                          className="stroke-black transition-all duration-300 group-hover:stroke-white"
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={16}
                          viewBox="0 0 17 16"
                          fill="none"
                        >
                          <path
                            d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                            stroke=""
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="group flex items-center flex-col gap-8 w-full md:w-1/2 mx-auto md:col-span-2 lg:col-span-1 lg:w-full">
                    <div className="block">
                      <img
                        src="https://pagedone.io/asset/uploads/1707480044.png"
                        alt="Project Achievements of Frame.io"
                      />
                    </div>
                    <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                      <div className="block">
                        <h4 className="text-2xl font-manrope font-semibold text-gray-900 mb-1">
                          Technical Questions
                        </h4>
                        <p className="font-medium text-lg text-gray-400">
                          *****
                        </p>
                      </div>
                      <button className=" border border-black py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black">
                        <svg
                          className="stroke-black transition-all duration-300 group-hover:stroke-white"
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={16}
                          viewBox="0 0 17 16"
                          fill="none"
                        >
                          <path
                            d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                            stroke=""
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <a href="resources">
          <button className="flex items-center justify-center py-3.5 px-7 rounded-full font-semibold text-base text-white bg-indigo-600 shadow-sm shadow-transparent transition-all duration-300 hover:shadow-indigo-200 hover:bg-indigo-700 w-max mx-auto">
            View More
          </button>
        </a>
      </section>
    </>
  );
}
