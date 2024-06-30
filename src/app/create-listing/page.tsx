"use client";
import CustomInput from "@/_components/CustomInput";
import { FormData } from "@/interfaces/create-listing";
import React, { useState, MouseEvent, ChangeEvent } from "react";
import ToggleButtonGroup from "@/_components/ToggleButtonGroup";
import CustomTextarea from "@/_components/CustomTextarea";
import Button from "@/_components/Buttons";
import Spinner from "@/_components/Spinner";
import { toast } from "react-toastify";

export interface CustomInputProps {
  id: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  className?: string;
  min?: number;
  max?: number;
}
const CreateListing = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: true,
    regularPrice: 0,
    discountedPrice: 0,
    latitude: 0,
    longitude: 0,
    images: {},
  });
  const [geolocationEnabled, setGeolocationEnabled] = useState(true);

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    address,
    furnished,
    latitude,
    longitude,
    description,
    regularPrice,
    offer,
    discountedPrice,
    images,
  } = formData;

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | MouseEvent<HTMLButtonElement>
  ) => {
    let booleanValue: boolean | null = null;

    const target = e.currentTarget as HTMLInputElement;
    const { id, value, files } = target;
    if (value === "true") booleanValue = true;
    if (value === "false") booleanValue = false;

    if (files) {
      setFormData((prevState) => ({
        ...prevState,
        images: files,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [id]: booleanValue ?? value,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (+discountedPrice >= +regularPrice) {
      setLoading(false);
      toast.error("Discounted price needs to be less than regular price");
      return;
    }
    if (images.length > 6) {
      setLoading(false);
      toast.error("Maximum 6 images are allowed");
      return;
    }

    let geolocation = {};
    let location;

    if (geolocationEnabled) {
      try {
        const response = await fetch(`http://localhost:3001/${1}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API data:", data);

        geolocation = data.geolocation;
        location = data.location;
      } catch (error) {
        console.error("Error fetching geolocation data:", error);
        toast.error("Failed to fetch geolocation data");
        setLoading(false);
        return;
      }
    }

    setLoading(false);
    toast.success("Listing created successfully");
  };

  if (loading) {
    return (
      <>
        <h1>Loading.......................</h1>
        <Spinner />
      </>
    );
  }

  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
      <form onSubmit={handleSubmit}>
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={handleChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            sell
          </button>
          <button
            type="button"
            id="type"
            value="rent"
            onClick={handleChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "sale"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            rent
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold">Name</p>
        <CustomInput
          id="name"
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="Name"
          maxLength={32}
          minLength={10}
        />
        <div className="flex space-x-6 mb-6">
          <div>
            <p className="text-lg font-semibold">Beds</p>

            <CustomInput
              id="bedrooms"
              value={bedrooms}
              onChange={handleChange}
              type="number"
              placeholder="Beds"
              min={1}
              max={50}
              className="text-center"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Baths</p>
            <CustomInput
              id="bathrooms"
              value={bathrooms}
              onChange={handleChange}
              type="number"
              placeholder="Baths"
              min={1}
              max={50}
              required
              className="text-center"
            />
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold">Parking spot</p>
        <div className="flex">
          <Button
            id="parking"
            type="button"
            value={true}
            onClick={handleChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </Button>
          <Button
            id="parking"
            value={false}
            type="button"
            onClick={handleChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            no
          </Button>
        </div>
        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex">
          <Button
            id="furnished"
            value={true}
            type="button"
            onClick={handleChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </Button>

          <Button
            id="furnished"
            value={false}
            type="button"
            onClick={handleChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            no
          </Button>
        </div>
        <p className="text-lg mt-3 font-semibold">Address</p>

        <div>
          <CustomTextarea
            id="address"
            type="text"
            value={address}
            onChange={handleChange}
            placeholder="Address"
          />
          <p className="text-lg mt-3 font-semibold">Description</p>
          <CustomTextarea
            id="description"
            type="text"
            value={description}
            onChange={handleChange}
            placeholder="Description"
          />
        </div>
        <p className="text-lg mt-6 font-semibold">Offer</p>
        <div className="flex mb-6">
          <Button
            id="offer"
            value={true}
            type="button"
            onClick={handleChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </Button>

          <Button
            id="offer"
            value={false}
            type="button"
            onClick={handleChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            no
          </Button>
        </div>
        <div className="flex items-center mb-6">
          <div className="">
            <p className="text-lg font-semibold">Regular price</p>
            <div className="flex w-full justify-center items-center space-x-6">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={handleChange}
                min="50"
                max="400000000"
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              />
              {type === "rent" && (
                <div className="">
                  <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {!geolocationEnabled && (
          <div className="flex space-x-6 justify-start mb-6">
            <div className="">
              <p className="text-lg font-semibold">Latitude</p>

              <CustomInput
                type="number"
                id="latitude"
                value={latitude}
                onChange={handleChange}
                placeholder="Baths"
                min={-90}
                max={90}
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:text-gray-700 focus:border-slate-600 text-center"
              />
            </div>
            <div className="">
              <p className="text-lg font-semibold">Longitude</p>

              <CustomInput
                type="number"
                id="longitude"
                value={longitude}
                onChange={handleChange}
                min={-180}
                max={180}
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:text-gray-700 focus:border-slate-600 text-center"
              />
            </div>
          </div>
        )}

        {offer && (
          <div className="flex items-center mb-6">
            <div className="">
              <p className="text-lg font-semibold">Discounted Price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={handleChange}
                  min="50"
                  max="400000000"
                  required={offer}
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                />
                {type === "rent" && (
                  <div className="">
                    <p className="text-md w-full whitespace-nowrap">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">
            The first image will be the cover (max 6)
          </p>
          <input
            type="file"
            id="images"
            onChange={handleChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />
        </div>
        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
};

export default CreateListing;
