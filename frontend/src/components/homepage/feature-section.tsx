import {
  GlobeAltIcon,
  UserGroupIcon,
  LockClosedIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Making easy to build community",
    description:
      "We match investors with surface providers, so they can share and access project details and shape their dream energy community.",
    icon: GlobeAltIcon,
  },
  {
    name: "Trust and security",
    description:
      "We verify all published surface as well as investment offers by our expert team.",
    icon: LockClosedIcon,
  },
  {
    name: "Educational support",
    description:
      "We provide educational contents for newcomers and project participants to create better understanding and easily follow project trajectories for energy communities. ",
    icon: UserGroupIcon,
  },
  {
    name: "Active communication channels",
    description:
      "We offer community members a place to connect via our community chat and exchange details about their energy community plans.",
    icon: ChatBubbleLeftRightIcon,
  },
];

export function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Find your community.
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What do we offer?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At SonnenNetz, we empower communities with sustainable energy
            solutions. Our platform connects you to a network of local renewable
            energy projects, enabling you to participate directly in energy
            production and management. Enjoy the benefits of reduced energy
            costs, access to clean power, and the opportunity to contribute to a
            greener planet. Join us to make energy use transparent, efficient,
            and community-driven.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
