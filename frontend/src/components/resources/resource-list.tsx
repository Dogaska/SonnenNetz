import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../axios/AxiosInstance";
import { Pagination } from "../common/pagination";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string;
  created_at: string;
  category: string;
  level: string;
  author_username: string;
  author_profile_image: string;
  profession: string;
}

export function ResourceList() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const GetBlogData = () => {
    AxiosInstance.get(`api/resources/all/?page=${currentPage}`)
      .then((res) => {
        if (res.data.results && Array.isArray(res.data.results.result)) {
          setBlogData(res.data.results.result);
          console.log(res.data.results.result);
          setTotalPages(res.data.results.total_pages);
          setIsDataLoaded(true);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch offer data:", error);
      });
  };

  useEffect(() => {
    GetBlogData();
  }, [currentPage]);

  //useEffect(() => {
  //  AxiosInstance.get("api/resources/all/")
  //    .then((res) => {
  //      if (res.data.results && Array.isArray(res.data.results.result)) {
  //        setBlogData(res.data.results.result);
  //        setBlogData(res.data.results.result);
  //      }
  //    })
  //    .catch((error) => {
  //      console.error("Failed to fetch blog data:", error);
  //    });
  //}, []);

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

  const getLevelStyle = (level: string) => {
    switch (level) {
      case "easy":
        return "bg-lime-100";
      case "medium":
        return "bg-sky-100";
      case "advance":
        return "bg-rose-100";
      default:
        return "bg-gray-100";
    }
  };

  return (
    isDataLoaded && (
      <div className="bg-white py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <article className="flex flex-col px-10 py-10 border border-gray-300 rounded-lg p-4 shadow-sm">
            <div className="mx-auto mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogData.map((post, index) => (
                <article
                  key={index}
                  className="flex flex-col border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md"
                  style={{ minHeight: "30rem" }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <time dateTime={post.created_at} className="text-gray-500">
                      {formatDate(post.created_at)}
                    </time>
                    <div>
                      <Link
                        to={post.category}
                        className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 mr-2"
                      >
                        {post.category}
                      </Link>
                      <Link
                        to={`/level/${post.level}`}
                        className={`rounded-full px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 ${getLevelStyle(
                          post.level
                        )}`}
                      >
                        {post.level}
                      </Link>
                    </div>
                  </div>
                  <Link to={post.slug}>
                    <img
                      src={
                        `http://localhost:8000${post.cover_image}` ||
                        "default-image-url.jpg"
                      }
                      alt={post.title}
                      className="w-full mt-5 h-48 object-cover rounded-lg mb-5" // Added border radius and margin bottom
                    />
                  </Link>
                  <h3 className="text-lg font-semibold leading-snug line-clamp-2 mb-2">
                    <Link to={post.slug}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-5 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-2 flex items-center">
                    <img
                      src={post.author_profile_image}
                      alt=""
                      className="h-10 w-10 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-sm font-semibold">
                        {post.author_username}
                      </p>
                      <p className="text-xs text-gray-500">{post.profession}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </article>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    )
  );
}
