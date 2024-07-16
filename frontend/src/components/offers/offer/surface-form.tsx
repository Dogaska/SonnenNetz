import { FormHeader } from "../../form/header";
import { InputBox, DateInputBox, TextArea, FileInput } from "../../form/input";
import { FormButton } from "../../form/button";
import { FormLabel } from "../../form/label";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../../axios/AxiosInstance";

interface FilePreview {
  name: string;
  url: string;
  size: number;
}

export function SurfaceForm() {
  const { register, handleSubmit } = useForm();
  const [coverImage, setCoverImage] = useState(null);
  const [coverImagePreview, setCoverImagePreview] =
    useState<FilePreview | null>(null);
  const [pictures, setPictures] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [picturePreviews, setPicturePreviews] = useState<FilePreview[]>([]);
  const [documentPreviews, setDocumentPreviews] = useState<FilePreview[]>([]);
  const [showMessage, setShowMessage] = useState(false);
  const [isPostSuccessful, setIsPostSuccessful] = useState(false);

  const navigate = useNavigate();

  const handleCoverImageChange = (event: { target: { files: any[] } }) => {
    const file = event.target.files[0];
    if (file) {
      const imagePreview: any = {
        name: file.name,
        url: URL.createObjectURL(file),
        size: file.size,
      };
      setCoverImage(file);
      setCoverImagePreview(imagePreview);
    }
  };

  const handlePicturesChange = (event: {
    target: { files: Iterable<unknown> | ArrayLike<unknown> };
  }) => {
    const filesArray: any = Array.from(event.target.files);
    const filePreviews: any = filesArray.map((file: any) => ({
      name: file.name,
      url: URL.createObjectURL(file),
      size: file.size,
    }));
    setPictures(filesArray);
    setPicturePreviews(filePreviews);
  };

  const handleDocumentsChange = (event: any) => {
    const filesArray: any = Array.from(event.target.files);
    const filePreviews: any = filesArray.map((file: any) => ({
      name: file.name,
      url: URL.createObjectURL(file),
      size: file.size,
    }));
    setDocuments(filesArray);
    setDocumentPreviews(filePreviews);
  };

  const onSubmit = (data: ArrayLike<unknown> | { [s: string]: unknown }) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === "string" || value instanceof Blob) {
        formData.append(key, value);
      } else {
        formData.append(key, String(value));
      }
    });
    if (coverImage) {
      formData.append("cover_image", coverImage);
      pictures.forEach((picture) => {
        formData.append("images", picture);
      });
      documents.forEach((document) => {
        formData.append("files", document);
      });
    }

    formData.append("offer_type", "Surface Offer");

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    AxiosInstance.post("/api/offers/", formData, {
      headers: {
        "Content-Type": undefined,
      },
    })
      .then((response) => {
        console.log("Success:", response.data);
        setShowMessage(true);
        setIsPostSuccessful(true);

        // Navigate to the new page after 3 seconds
        setTimeout(() => {
          navigate("/projects");
        }, 3000);
      })
      .catch((error) => {
        setShowMessage(true);
        setIsPostSuccessful(false);
        console.error(
          "There was an error creating the offer!",
          error.response.data
        );
      });
  };

  return (
    <div className="container mx-auto max-w-4xl px-4  mt-20">
      <FormHeader>Create a new surface offer</FormHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8">
          <div>
            <FormLabel htmlFor="offer-name" isRequired={true}>
              Offer Name
            </FormLabel>
            <div className="mt-2">
              <InputBox
                id="offer_name"
                name="offer_name"
                type="text"
                autoComplete="off"
                required={true}
                placeholder="Offer name"
                register={register}
              ></InputBox>
            </div>
          </div>
          <div>
            <FormLabel htmlFor="last_name" isRequired={true}>
              Surface Location
            </FormLabel>
            <div className="mt-2">
              <InputBox
                id="location"
                name="location"
                type="text"
                autoComplete="off"
                required={true}
                placeholder="Surface location"
                register={register}
              ></InputBox>
            </div>
          </div>
          <div className="col-span-full">
            <FormLabel htmlFor="offer_description" isRequired={true}>
              Offer Description
            </FormLabel>
            <TextArea
              id="description"
              name="offer_description"
              placeholder="Write an offer description..."
              rows={6}
              register={register}
            ></TextArea>
          </div>
          <div className="col-span-full">
            <FormLabel htmlFor="motivation" isRequired={false}>
              Motivation
            </FormLabel>
            <TextArea
              id="motivation"
              name="motivation"
              placeholder="Write a motivation text that describes your dream energy community..."
              rows={6}
              register={register}
            ></TextArea>
          </div>
          <div>
            <FormLabel htmlFor="surface_type" isRequired={true}>
              Surface type
            </FormLabel>
            <div className="mt-2">
              <InputBox
                id="surface_type"
                name="surface_type"
                type="text"
                autoComplete="off"
                required={true}
                placeholder="Roof etc.."
                register={register}
              ></InputBox>
            </div>
          </div>
          <div>
            <FormLabel htmlFor="surface_area" isRequired={true}>
              Surface area
            </FormLabel>
            <div className="mt-2">
              <InputBox
                id="surface_area"
                name="surface_area"
                type="number"
                autoComplete="off"
                required={true}
                placeholder="Surface area in metersquares."
                register={register}
              ></InputBox>
            </div>
          </div>
          <div>
            <FormLabel htmlFor="investment_amount" isRequired={true}>
              Budget goal
            </FormLabel>
            <div className="mt-2">
              <InputBox
                id="budget_goal"
                name="investment_amount"
                type="number"
                autoComplete="off"
                required={true}
                placeholder="Budget goal in euros."
                register={register}
              ></InputBox>
            </div>
          </div>
          <div>
            <FormLabel htmlFor="max_investment_limit" isRequired={true}>
              Maximum investment limit per investor
            </FormLabel>
            <div className="mt-2">
              <InputBox
                id="max_investment_limit"
                name="max_investment_limit"
                type="number"
                autoComplete="off"
                required={true}
                placeholder="Investment upper bound in euros."
                register={register}
              ></InputBox>
            </div>
          </div>
          <div>
            <FormLabel htmlFor="startdate" isRequired={true}>
              Start date
            </FormLabel>
            <div className="mt-2">
              <DateInputBox
                id="start_date"
                name="start_date"
                type="date"
                autoComplete="off"
                required={true}
                placeholder="mm/dd/yyyy"
                register={register}
              ></DateInputBox>
            </div>
          </div>
          <div>
            <FormLabel htmlFor="enddate" isRequired={true}>
              End date
            </FormLabel>
            <div className="mt-2">
              <DateInputBox
                id="end_date"
                name="end_date"
                type="date"
                autoComplete="bday"
                required={true}
                placeholder="dd/mm/yy"
                register={register}
              ></DateInputBox>
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <FormLabel htmlFor="cover-photo-upload" isRequired={true}>
            Cover Picture
          </FormLabel>
          <FileInput
            id="cover-photo-upload"
            name="cover_image"
            htmlFor="cover-photo-upload"
            text="Upload offer cover image"
            type="file"
            accept=".png, .jpg"
            extension="PNG, JPG ... "
            size="10"
            onChange={handleCoverImageChange}
            multiple={false}
          ></FileInput>
          <div className="preview-container">
            {coverImagePreview ? (
              <div className="preview">
                <a
                  href={coverImagePreview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {coverImagePreview.name}
                </a>
                <span className="flex-shrink-0 text-gray-400">
                  {(coverImagePreview.size / 1024 / 1024).toFixed(2)} MB
                </span>
              </div>
            ) : (
              <div>No cover image selected.</div>
            )}
          </div>
        </div>

        <div className="col-span-full">
          <FormLabel htmlFor="photo-upload" isRequired={true}>
            Pictures
          </FormLabel>
          <FileInput
            id="photo-upload"
            name="images"
            htmlFor="photo-upload"
            text="Upload your images"
            type="file"
            accept=".png, .jpg"
            extension="PNG, JPG ... "
            size="10"
            onChange={handlePicturesChange}
            multiple={true}
          ></FileInput>
          <div className="preview-container">
            {picturePreviews.map((file: any, index: number) => (
              <div key={index} className="preview">
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                  {file.name}
                </a>
                <span className="flex-shrink-0 text-gray-400">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-full">
          <FormLabel htmlFor="doc-upload" isRequired={true}>
            Additional Documents
          </FormLabel>
          <FileInput
            id="doc-upload"
            name="file_upload"
            htmlFor="doc-upload"
            type="file"
            text="Upload your documents"
            accept=".pdf, .doc, .docx"
            extension="PDF, DOCX ... "
            size="10"
            onChange={handleDocumentsChange}
            multiple={true}
          ></FileInput>
          <div className="preview-container">
            {documentPreviews.map((file: any, index: number) => (
              <div key={index} className="preview">
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                  {file.name}
                </a>
                <span className="flex-shrink-0 text-gray-400">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </span>
              </div>
            ))}
          </div>
        </div>
        {showMessage ? (
          <div className="my-4">
            {isPostSuccessful ? (
              <div className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm">
                <p className="my-2 justify-center text-center text-sm text-white">
                  Offer is successfully created and listed. You are directing to
                  offer listing page...
                </p>
              </div>
            ) : (
              <div className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm">
                <p className="my-2 justify-center text-center text-sm text-white">
                  Offer creation is failed. Please make sure you add all
                  necessary information!
                </p>
              </div>
            )}
          </div>
        ) : null}
        {/*<div className="flex items-center  my-6">
          <input
            id="checkbox-policy"
            type="checkbox"
            defaultValue=""
            className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
          />
          <label
            htmlFor="checkbox-policy"
            className="text-sm font-normal text-gray-600"
          >
            You agree to our friendly{" "}
            <a href="javascript:;" className="underline underline-offset-4">
              privacy policy.
            </a>
          </label>
        </div>*/}
        <div className="mt-6 flex justify-end gap-x-6 w-full h-12 text-base font-semibold leading-6">
          <FormButton
            type="button"
            className="rounded-md bg-white border border-indogo-800 px-10 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Cancel
          </FormButton>
          <FormButton
            type="submit"
            className="rounded-md bg-indigo-600 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </FormButton>
        </div>
      </form>
    </div>
  );
}
