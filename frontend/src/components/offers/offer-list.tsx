const itemData = [
  {
    imageUrl:
      "https://www.bayerncare.de/fileadmin/_processed_/3/0/csm_perlachstift-muenchen-960x640_3d5b78edf7.jpg",
    title: "Project Neuperlach",
    location: "Dust Studios",
    size: "*** m2",
    quantity: 2,
    status: "Active",
    statusColor: "emerald",
    publisDate: "23rd March 2021",
    href: "#",
  },
  {
    imageUrl:
      "https://ms.immowelt.org/8eadd9e3-d46b-44f3-a8e6-83bd2c75ac24/14bcc812-0d73-4f2d-9286-e9163b24788c/0x400.webp",
    title: "Project Neuhausen",
    location: "Diamond Dials",
    size: "Regular",
    quantity: 1,
    status: "Completed",
    statusColor: "indigo",
    publisDate: "23rd March 2021",
    href: "#",
  },
  {
    imageUrl:
      "https://wp-asset.groww.in/wp-content/uploads/2021/04/27191310/Investment.jpg",
    title: "Investment Garching",
    location: "Diamond Dials",
    size: "Regular",
    quantity: 1,
    status: "Dispatched",
    statusColor: "indigo",
    publisDate: "23rd March 2021",
    href: "#",
  },
  {
    imageUrl:
      "https://www.merkur.de/assets/images/34/675/34675138-um-den-volksfestplatz-im-buergerpark-links-zu-vergroessern-soll-fuer-die-geplante-jugend-flaeche-rechts-ein-anderer-platz-gefunden-werden-2rWji26Hou70.jpg",
    title: "Surface Garching",
    location: "Diamond Dials",
    size: "Regular",
    quantity: 1,
    status: "Dispatched",
    statusColor: "indigo",
    publisDate: "23rd March 2021",
    href: "projects/surface-features/",
  },
  {
    imageUrl: "https://pagedone.io/asset/uploads/1701167621.png",
    title: "Diamond Platinum Watch",
    location: "Diamond Dials",
    size: "Regular",
    quantity: 1,
    status: "Dispatched",
    statusColor: "indigo",
    publisDate: "23rd March 2021",
    href: "#",
  },
];

const ItemList = () => (
  <section className="py-24 relative">
    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
      <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl lg:max-w-full mx-auto">
        {itemData.map((item) => (
          <a href={item.href}>
            <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
              <div className="ml-5 img-box w-full lg:max-w-[140px]">
                <img
                  src={item.imageUrl}
                  alt={`${item.title} image`}
                  className="aspect-square w-full rounded-lg "
                />
              </div>
              <div className="flex flex-row items-center w-full ">
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                  <div className="flex items-center">
                    <div>
                      <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                        {item.title}
                      </h2>
                      <p className="font-normal text-lg leading-8 text-gray-500 mb-3">
                        Location: {item.location}
                      </p>
                      <div className="flex items-center">
                        <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                          Area:{" "}
                          <span className="text-gray-500">{item.size}</span>
                        </p>
                        <p className="font-medium text-base leading-7 text-black">
                          Qty:{" "}
                          <span className="text-gray-500">{item.quantity}</span>
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
                          className={`font-medium text-sm leading-6 py-0.5 px-3 rounded-full lg:mt-3 bg-${item.statusColor}-50 text-${item.statusColor}-600`}
                        >
                          {item.status}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-5 lg:col-span-2 flex items-center">
                      <div className="flex gap-3 lg:block">
                        <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                          Publis Date
                        </p>
                        <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                          {item.publisDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ItemList;
