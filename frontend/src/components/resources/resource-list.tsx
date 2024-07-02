import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../axios/AxiosInstance";

// Define an interface for the structure of each post
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

export function ResourceList() {
  const [blogData, setBlogData] = useState<Post[]>([]); // Use the Post interface in the state definition

  const GetBlogData = () => {
    AxiosInstance.get(`api/resources/all/`)
      .then((res) => {
        if (res.data.results && Array.isArray(res.data.results.result)) {
          setBlogData(res.data.results.result); // Only set if result is an array
          console.log(res.data.results.result);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch blog data:", error);
      });
  };

  useEffect(() => {
    GetBlogData();
  }, []);

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
      case "hard":
        return "bg-pink-100";
      case "advance":
        return "bg-rose-100";
      default:
        return {};
    }
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Resources
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            We've compiled resources to support your community energy project at
            any stage. Filter by keyword, area, or activity, or explore our
            stage-specific selections.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogData.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.created_at} className="text-gray-500">
                  {formatDate(post.created_at)}
                </time>
                <Link
                  to={post.category}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category}
                </Link>

                <Link
                  to={`/level/${post.level}`}
                  className={`relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 ${getLevelStyle(
                    post.level
                  )}`}
                >
                  {post.level}
                </Link>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link to={post.slug}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.excerpt}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <Link to={`/${post.author_username}`}>
                      {post.author_username}
                    </Link>
                  </p>
                  <p className="text-gray-600">{post.author_username}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
