import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom"; // Import Link component

const navigation = [
  { name: "Home", href: "/home", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Resources", href: "/resources", current: false },
  { name: "About Us", href: "/about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function NavigationBar() {
  const [currentActiveIndex, setCurrentActiveIndex] = useState(null);

  const handleNavigationClick = (index) => {
    setCurrentActiveIndex(index);
  };

  return (
    <div className="min-h-full z-50">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-auto"
                      src="src/assets/images/Logo_sonnennetz.svg"
                      alt="Your Company"
                    />
                  </div>
                </div>
                <div className="hidden md:flex ml-auto">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item, index) => (
                      <Link
                        to={item.href}
                        key={item.name}
                        className={classNames(
                          index === currentActiveIndex
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        onClick={() => handleNavigationClick(index)}
                        aria-current={
                          index === currentActiveIndex ? "page" : undefined
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
}
