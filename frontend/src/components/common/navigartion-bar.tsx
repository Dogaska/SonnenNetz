import { SetStateAction, useState, useEffect } from "react";
import AxiosInstance from "../axios/AxiosInstance";
import { Link, useNavigate } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/home", current: false },
  { name: "Offers", href: "/projects", current: false },
  { name: "Blog", href: "/resources", current: false },
  { name: "Chat", href: "/chat", current: false },
  { name: "About Us", href: "/about", current: false },
  { name: "Login", href: "/login", current: false },
  { name: "Sign Up", href: "/signup", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function NavigationBar() {
  const [currentActiveIndex, setCurrentActiveIndex] = useState();

  const handleNavigationClick = (index: number | SetStateAction<null>) => {
    setCurrentActiveIndex(index);
  };

  const navigate = useNavigate();

  const logoutUser = () => {
    AxiosInstance.post(`logoutall/`, {}).then(() => {
      // here logout all removes all tokens for all the devices of the user (alternativ -> `logout/`)
      localStorage.removeItem("Token");
      navigate("/login");
    });
  };

  const [userHasToken, setUserHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    token ? setUserHasToken(true) : setUserHasToken(false);
  }, []);

  return (
    <Disclosure as="nav" className="bg-gray-800 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-12 w-auto lg:h-16 hover:shadow-lg transition-shadow duration-300"
                    src="src/assets/images/Logo_Sonnennetz.svg"
                    alt="SonnenNetz"
                    style={{ filter: "drop-shadow(2px 4px 6px black)" }}
                  />
                </div>
                <div className="hidden sm:flex sm:ml-6 sm:flex-1 sm:items-center sm:justify-between">
                  <div className="flex items-baseline space-x-4">
                    {navigation.map(
                      (item, index) =>
                        item.name !== "Login" &&
                        item.name !== "Sign Up" && (
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
                        )
                    )}
                  </div>
                  {!userHasToken && (
                    <div className="flex items-center space-x-4">
                      <Link
                        to="/login"
                        className="text-sm px-3 py-2 leading-none border rounded-md text-gray-300 font-medium hover:border-transparent hover:text-indigo-500 hover:bg-white"
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className="text-sm px-3 py-2 leading-none border rounded-md text-gray-300 font-medium hover:border-transparent hover:text-indigo-500 hover:bg-white"
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              {userHasToken && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            onClick={logoutUser}
                          >
                            Sign out
                          </a>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>
              )}
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
