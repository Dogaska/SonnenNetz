import { NavigationBar } from "../components/common/navigartion-bar";
import { HeroSection } from "../components/homepage/hero-section";
import { Features } from "../components/homepage/feature-section";
import { FooterSimple } from "../components/common/footer-simple";
import { BlogCarousel } from "../components/blog/blog-carousel";
export function Home() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <HeroSection></HeroSection>

      <Features></Features>
      {/*Blog container*/}

      <section className="py-24 relative">
        <div className="w-full max-w-5xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-gray-900 text-4xl font-bold tracking-tight lg:text-start text-center">
                  Do you want to learn more about energy communities?
                </h2>
                <p className="text-gray-500 text-base font-normal tracking-tight lg:text-start text-center">
                  You can visit our blog page to learn more.
                </p>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <a href="/resources">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Blog Posts
                  </span>
                </a>
              </button>
            </div>
            <img
              className="lg:mx-10 mx-auto rounded-lg"
              src="src/assets/images/picture1.png"
              alt="about Us image"
            />
          </div>
        </div>
      </section>
      {/*other option*/}
      <section className="py-24 relative">
        <div className="w-full max-w-5xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            {/* Move the image to the first position */}
            <img
              className="lg:-mx-10 mx-auto rounded-lg"
              src="src/assets/images/picture2.png"
              alt="about Us image"
            />

            {/*Text block */}
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-gray-900 text-4xl font-bold tracking-tight lg:text-start text-center">
                  Would you like to be part of your local energy community?
                </h2>
                <p className="text-gray-500 text-base font-normal tracking-tight lg:text-start text-center">
                  You can see all the active energy community projects and make
                  proposals to be part of them.
                </p>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <a href="/projects">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Go to our Projects page
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <BlogCarousel></BlogCarousel>
      <FooterSimple></FooterSimple>
    </>
  );
}
