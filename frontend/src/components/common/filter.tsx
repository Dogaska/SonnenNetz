export function Filter(props: { setFilters: any; filterData: any }) {
  const { setFilters, filterData } = props;

  const handleFilterChange = (event: any) => {
    const { name, value } = event.target;
    setFilters((filters: any) => ({ ...filters, [name]: value }));
  };

  return (
    <div className="flex flex-row justify-start items-center space-x-2">
      {filterData.map((data: any, index: number) => (
        <div key={index} className="relative">
          <select
            name={data.key}
            onChange={handleFilterChange}
            className="mt-3 text-white bg-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 flex items-center justify-center"
          >
            {data.options.map((option: any, optionIndex: number) => (
              <option
                key={optionIndex}
                value={option.value}
                className="py-2 text-sm text-gray-700 bg-white hover:bg-gray-100 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900"
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
