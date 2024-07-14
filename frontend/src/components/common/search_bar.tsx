import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function SearchBar(props: { barText: string }) {
  const { barText } = props;
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8">
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
              placeholder={barText}
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
    </div>
  );
}
