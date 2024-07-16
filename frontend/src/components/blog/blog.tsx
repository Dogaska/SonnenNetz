import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AxiosInstance from "../axios/AxiosInstance";
import { RelatedBlogs } from "./related-blogs";
import { BlogComment } from "./blog-comment";

interface Post {
  content: string;
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
  const { slug } = useParams();

  // blog data get request
  const [blogData, setBlogData] = useState<Post[]>([]);

  const GetBlogData = () => {
    AxiosInstance.get(`api/resources/${slug}`)
      .then((res) => {
        if (res.data) {
          setBlogData([res.data]);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch blog data:", error);
      });
  };

  useEffect(() => {
    GetBlogData();
  }, [slug]);

  // date formatting
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
      <main className="pt-8 pb-16 bg-white dark:bg-gray-900">
        <div className="px-8 mx-auto max-w-4xl">
          {blogData.map((post: any) => (
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
                <h1 className="text-2xl font-bold">{post.title}</h1>
                <p>{post.content}</p>
              </header>
              <img
                src={`http://localhost:8000${post.cover_image}`}
                alt="Blog"
                className="h-1/2 w-auto mx-auto rounded-lg"
              />
              <BlogComment />
            </article>
          ))}
        </div>
      </main>
      <RelatedBlogs />
    </>
  );
}
