import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AxiosInstance from "../axios/AxiosInstance";
import { TextArea } from "../form/input";
import { FormButton } from "../form/button";

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

  //comment get request
  const [commentData, setCommentData] = useState([]);

  const GetCommentData = () => {
    AxiosInstance.get(`api/resources/${slug}/comments/all`)
      .then((res) => {
        if (res.data) {
          setCommentData(res.data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch blog data:", error);
      });
  };

  useEffect(() => {
    GetCommentData();
  }, [slug]);

  //comment post request
  const { register, handleSubmit } = useForm();

  const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage
  let user = null;
  if (token) {
    user = jwt_decode(token);
  }

  const submission = (data: { content: string }) => {
    AxiosInstance.post(`api/resources/${slug}/commentpost/`, {
      content: data.content,
    })
      .then((response) => {})
      .catch((error) => {
        console.error("Failed to post comment data:", error);
      });
  };

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
                <h1 className="text-2xl font-bold">{post.title}</h1>
                <p>{post.content}</p>
              </header>
              <img
                src={`http://localhost:8000${post.cover_image}`}
                alt="Blog"
                className="h-1/2 w-auto mx-auto rounded-lg"
              />

              <section className="not-format">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg mt-6 lg:text-2xl font-bold text-gray-900 dark:text-white">
                    Discussion ({commentData.length})
                  </h2>
                </div>

                <form onSubmit={handleSubmit(submission)} className="mb-6">
                  <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <label htmlFor="comment" className="sr-only">
                      Your comment
                    </label>
                    <TextArea
                      id="comment"
                      name="comment"
                      rows={6}
                      placeholder="Write a comment..."
                      register={register}
                    ></TextArea>
                  </div>
                  <div>
                    <FormButton
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Post comment
                    </FormButton>
                  </div>
                </form>
                {commentData.map((comment, index) => (
                  <article className="p-6 mb-6 text-base bg-gray-100 rounded-lg dark:bg-gray-900">
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                          <a href="#">
                            <img
                              className="mr-2 border w-6 h-6 rounded-full"
                              src={
                                comment.user_profile_picture === null
                                  ? "http://localhost:8000/backend/media/profile_pictures/null.png"
                                  : `http://localhost:8000${comment.user_profile_picture}`
                              }
                            />
                          </a>

                          {comment.user_username}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <time dateTime={comment.created_at}>
                            {formatDate(comment.created_at)}
                          </time>
                        </p>
                      </div>
                    </footer>
                    <p>{comment.content}</p>
                    <div className="flex items-center mt-4 space-x-4"></div>
                  </article>
                ))}
              </section>
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

function jwt_decode(token: string): any {
  throw new Error("Function not implemented.");
}
