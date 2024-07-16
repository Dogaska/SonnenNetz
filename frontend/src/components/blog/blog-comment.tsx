import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import AxiosInstance from "../axios/AxiosInstance";
import { TextArea } from "../form/input";
import { FormButton } from "../form/button";

export function BlogComment() {
  const { slug } = useParams<string>(); // Ensure proper typing for useParams

  // Comment get request
  const [commentData, setCommentData] = useState<any[]>([]); // Define state with type if possible

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

  // Comment post request
  const { register, reset, handleSubmit } = useForm();
  const token = localStorage.getItem("Token");

  const submission = (data: any) => {
    if (token) {
      console.log(data); // Logging the data before sending
      AxiosInstance.post(`api/resources/${slug}/commentpost/`, {
        content: data.comment,
      })
        .then((response) => {
          // Add the new comment to the existing comments state
          setCommentData([...commentData, response.data]);
          reset();
        })
        .catch((error) => {
          console.error(
            "Failed to post comment data:",
            error.response?.data || error.message
          );
        });
    } else {
      console.error("Authorization token is not found");
    }
  };

  useEffect(() => {
    GetCommentData();
  }, [commentData]);

  // Date formatting
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
        <article
          className="p-6 mb-6 text-base bg-gray-100 rounded-lg dark:bg-gray-900"
          key={index}
        >
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                <a href="#">
                  <img
                    className="mr-2 border w-6 h-6 rounded-full"
                    src={
                      comment.user_profile_picture === null
                        ? `http://localhost:8000${comment.user_profile_picture}`
                        : `http://localhost:8000${comment.user_profile_picture}`
                    }
                    alt="User profile"
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
  );
}
