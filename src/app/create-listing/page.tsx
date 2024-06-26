"use client";
import CustomInput from "@/_components/CustomInput";
import { FormData } from "@/interfaces/create-listing";
import React, { useState, MouseEvent, ChangeEvent } from "react";
import ToggleButtonGroup from "@/_components/ToggleButtonGroup";
import CustomTextarea from "@/_components/CustomTextarea";
import Button from "@/_components/Buttons";

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
  const [formData, setFormData] = useState<FormData>({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    latitude: 0,
    longitude: 0,
  });
  const [geolocationEnabled, setGeolocationEnabled] = useState(false);

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
  } = formData;

  const onChange = (event: any) => {
    setFormData({ ...formData, type: event.target.value });
    console.log("ttt");
  };

  return (
    <>
      <main className="max-w-md px-2 mx-auto">
        <h1 className="text-3xl text-center mt-6 font-bold">
          Create a Listing
        </h1>
        <form>
          <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
          <div className="flex">
            <div className="mr-3 w-full">
              <Button
                id="type"
                type="button"
                value="sale"
                onClick={onChange}
                isActive={type === "rent"}
              >
                sell
              </Button>
            </div>
            <div className="ml-3 w-full">
              <Button
                id="type"
                type="button"
                value="rent"
                onClick={onChange}
                isActive={type === "sale"}
              >
                rent
              </Button>
            </div>
          </div>

          <p className="text-lg mt-6 font-semibold">Name</p>
          <CustomInput
            id="name"
            value={name}
            onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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
              onClick={onChange}
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
              onClick={onChange}
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
              onClick={onChange}
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
              onClick={onChange}
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
              onChange={onChange}
              placeholder="Address"
            />
            <p className="text-lg mt-3 font-semibold">Description</p>
            <CustomTextarea
              id="description"
              type="text"
              value={description}
              onChange={onChange}
              placeholder="Description"
            />
          </div>
          <p className="text-lg mt-6 font-semibold">Offer</p>
          <div className="flex">
            <Button
              id="offer"
              value={true}
              type="button"
              onClick={onChange}
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
              onClick={onChange}
              className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                offer ? "bg-white text-black" : "bg-slate-600 text-white"
              }`}
            >
              no
            </Button>
          </div>
          {/* {!geolocationEnabled && (
            <div className="flex space-x-6 justify-start mb-6">
              <div className="">
                <p className="text-lg font-semibold">Latitude</p>

                <CustomInput
                  type="number"
                  id="latitude"
                  value={latitude}
                  onChange={onChange}
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
                  onChange={onChange}
                  min={-180}
                  max={180}
                  required
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:text-gray-700 focus:border-slate-600 text-center"
                />
              </div>
            </div>
          )} */}
        </form>
      </main>
    </>
  );
};

export default CreateListing;
