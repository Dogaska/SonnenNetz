import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AxiosInstance from "../axios/AxiosInstance";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string;
  created_at: string;
  category: string;
  level: string;
  author_username: {
    author_profile_image: string;
    profession: string;
  };
}

export function BlogTemplate() {
  // Initialize blogData as an empty array
  const [blogData, setBlogData] = useState<Post[]>([]);
  const { slug } = useParams();

  const GetBlogData = () => {
    AxiosInstance.get(`api/resources/${slug}`)
      .then((res) => {
        if (res.data) {
          // Make sure to set an array to blogData
          // Example: setBlogData(Array.isArray(res.data) ? res.data : [res.data]);
          setBlogData([res.data]); // If the response is a single blog post object
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch blog data:", error);
      });
  };

  useEffect(() => {
    GetBlogData();
  }, [slug]);

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const monthNames = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    return `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <>
      <main className="pt-8 pb-16 mt-8 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-8 mx-auto max-w-screen-lg">
          {blogData.map((post) => (
            <article
              key={post.id}
              className="mx-auto w-full max-w-max format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
            >
              <header className="ml-auto mb-6 lg:mb-6">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img
                      className="mr-4 w-16 h-16 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    />
                    <div>
                      <Link
                        to="#"
                        rel="author"
                        className="text-xl font-bold text-gray-900 dark:text-white"
                      >
                        {post.author_username}
                      </Link>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        {post.author_username}
                      </p>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        <time dateTime={post.created_at}>
                          {formatDate(post.created_at)}
                        </time>
                      </p>
                    </div>
                  </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  {post.title}
                </h1>
              </header>
              <p className="lead">{post.content}</p>
              <figure className="flex mt-5">
                <img src={`http://localhost:8000${post.cover_image}`} alt="" />
              </figure>
            </article>
          ))}
        </div>
      </main>
      <aside
        aria-label="Related articles"
        className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Related articles
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <article className="max-w-xs">
              <a href="#">
                <img
                  src="../src/assets/images/blogPost1.png"
                  className="mb-5 rounded-lg"
                  alt="Image 1"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="https://energycommunityplatform.eu/resources/coop-kit/">
                  Coop-kit
                </a>
              </h2>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Coop-kit is a free digital toolkit for cooperatives and local
                authorities involved in energy efficiency renovations. Source:
                RHEDCOOP.
              </p>
              <a
                href="https://energycommunityplatform.eu/resources/coop-kit/"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 2 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <img
                  src="./src/assets/images/blogPost2.png"
                  className="mb-5 rounded-lg"
                  alt="Image 2"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="https://citizenenergy.academy/course/course-1-introduction-to-citizen-energy/">
                  Online course: Introduction to citizen energy
                </a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                This online course introduces the concept of citizen energy:
                what it is and what you can change with it. (EUCENA - European
                Citizen Energy Academy)
              </p>
              <a
                href="https://energycommunityplatform.eu/resources/online-course-introduction-to-citizen-energy/"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 5 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <img
                  src="../src/assets/images/blogPost3.png"
                  className="mb-5 rounded-lg"
                  alt="Image 3"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="https://communityenergyacademy.eu/energy-citizenship-empowerment-kits/">
                  Energy citizen empowerment kit [English]
                </a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                The Energy citizen empowerment kit is a free, gamified tool that
                triggers and guides discussion about barriers to participation
                in energy communities.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 8 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <img
                  src="../src/assets/images/blogPost4.png"
                  className="mb-5 rounded-lg"
                  alt="Image 4"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="https://visitors-centre.jrc.ec.europa.eu/en/media/tools/recxploration-discover-world-renewable-energy-communities">
                  RECxploration
                </a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                RECxploration is an interactive and educational online game that
                shows how energy choices can change consumption and explains how
                to engage with energy communities.
              </p>
              <a
                href="https://energycommunityplatform.eu/resources/recxploration/"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 4 minutes
              </a>
            </article>
          </div>
        </div>
      </aside>
    </>
  );
}
