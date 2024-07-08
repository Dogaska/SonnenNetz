export function HeroSection() {
  return (
    <div className=" bg-white h-full">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="fixed transform-gpu overflow-hidden blur-3xl sm:-top-85"
          aria-hidden="false"
        >
          <div
            className="z-0 relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 -translate-y-1/2 rotate-[30deg] bg-gradient-to-tr from-[#46E59F] to-[#DCE546] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              The last chance to join Neuperlach project.{" "}
              <a href="projects" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Platform to find your Energy Community
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600"></p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="login"
                className="z-20 bg-indigo-600 hover:bg-gray-700 hover:ring-gray-700 ring ring-offset-white ring-indigo-600 text-white font-bold py-2 px-3 ml-3 rounded-md text-sm font-medium"
              >
                Get started
              </a>
              <a
                href="resources"
                className="z-20 text-indigo-600 hover:bg-indigo-600 ring ring-indigo-600/10 hover:text-white font-semibold py-2 px-3 ml-3 rounded-md text-sm font-medium"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="fixed inset-x-0 top-[calc(100%-13rem)] -z-1 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="z-0 relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#DCE546] to-[#46E59F] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
