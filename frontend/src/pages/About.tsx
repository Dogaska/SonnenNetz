import { NavigationBar } from "../components/common/navigartion-bar";
import { FooterSimple } from "../components/common/footer-simple";

const team = [
  {
    name: "Yufei Xu",
    image: "/assets/images/Yufei.png",
    profession: "Product Management",
    email: "yufei.xu@tum.de",
  },
  {
    name: "Anja Senkmüller",
    image: "/assets/images/Anja.jpg",
    profession: "Business Development",
    email: "anja.senkmueller@tum.de",
  },
  {
    name: "Nigar Doga Karacik",
    image: "/assets/images/Doga.png",
    profession: "Full-Stack Development",
    email: "ndogakaracik@tum.de",
  },
  {
    name: "Eray Yildiz",
    image: "/assets/images/Eray.png",
    profession: "Full-Stack Development",
    email: "eray.yildiz@tum.de",
  },
];

export function About() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-6xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              Welcome to SonnenNetz, where our vision for a sustainable future
              is powered by community and innovation. We are dedicated to
              transforming the landscape of renewable energy by making it
              accessible, transparent, and community-driven.
            </p>
            <h3 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-xl">
              Our Objectives
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              The core objective of SonnenNetz is to revolutionize individual
              participation in the energy transition. By enabling the formation
              of energy communities, we aim to:
            </p>

            <ul
              className="mt-6 text-lg leading-8 text-gray-800"
              style={{ listStyleType: "disc", marginLeft: "20px" }}
            >
              <li>
                Strengthen connections between local community projects, surface
                providers, and investors.
              </li>
              <li>Promote sustainable investments in renewable energy.</li>
              <li>
                Increase educational opportunities to understand and engage with
                energy community projects.
              </li>
            </ul>

            <h3 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-xl">
              Who We Are?
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              Meet the dynamic team behind SonnenNetz, a group of passionate
              professionals dedicated to reshaping the future of renewable
              energy through community-driven innovation.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none ">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((team, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    className="mx-auto rounded-lg h-24 w-24 object-cover z-10"
                    src={team.image}
                    alt={team.name}
                  />
                  <dd className="text-lg font-bold leading-7 text-gray-800">
                    {team.name}
                  </dd>
                  <dt className="text-base leading-9 tracking-tight text-gray-800">
                    {team.profession}
                  </dt>
                  <dt className="text-base leading-9 tracking-tight text-gray-800">
                    {team.email}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <FooterSimple></FooterSimple>
    </div>
  );
}
