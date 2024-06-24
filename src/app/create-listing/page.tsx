"use client";
import { CustomButtonProps, FormData } from "@/interfaces/create-listing";
import React, { useState, MouseEvent, ChangeEvent } from "react";

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
              <CustomButton
                id="type"
                value="sale"
                onClick={onChange}
                isActive={type === "rent"}
              >
                sell
              </CustomButton>
            </div>
            <div className="ml-3 w-full">
              <CustomButton
                id="type"
                value="rent"
                onClick={onChange}
                isActive={type === "sale"}
              >
                rent
              </CustomButton>
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
            required
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
                required
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
            <CustomButton
              id="parking"
              value="true"
              onClick={onChange}
              className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                !parking ? "bg-white text-black" : "bg-slate-600 text-white"
              }`}
            >
              Yes
            </CustomButton>
            <CustomButton
              id="parking"
              value="false"
              onClick={onChange}
              className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                parking ? "bg-white text-black" : "bg-slate-600 text-white"
              }`}
            >
              no
            </CustomButton>
          </div>
          <p className="text-lg mt-6 font-semibold">Furnished</p>
          <div className="flex">
            <CustomButton
              id="furnished"
              value="true"
              onClick={onChange}
              className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                !furnished ? "bg-white text-black" : "bg-slate-600 text-white"
              }`}
            >
              Yes
            </CustomButton>

            <CustomButton
              id="furnished"
              value="false"
              onClick={onChange}
              className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                furnished ? "bg-white text-black" : "bg-slate-600 text-white"
              }`}
            >
              no
            </CustomButton>
          </div>
          <p className="text-lg mt-6 font-semibold">Address</p>
          <textarea
            id="address"
            value={address}
            onChange={onChange}
            placeholder="Address"
            required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
          />
          {!geolocationEnabled && (
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
                <input
                  type="number"
                  id="longitude"
                  value={longitude}
                  onChange={onChange}
                  required
                  min="-180"
                  max="180"
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:text-gray-700 focus:border-slate-600 text-center"
                />
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
          )}
        </form>
      </main>
    </>
  );
};

export default CreateListing;

const CustomButton: React.FC<CustomButtonProps> = ({
  id,
  value,
  onClick,
  isActive,
  children,
  className = "",
}) => {
  return (
    <button
      type="button"
      id={id}
      value={value}
      onClick={onClick}
      className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
        isActive ? "bg-white text-black" : "bg-slate-600 text-white"
      } ${className}`}
    >
      {children}
    </button>
  );
};
const CustomInput: React.FC<CustomInputProps> = ({
  id,
  value,
  onChange,
  type,
  placeholder,
  maxLength,
  minLength,
  required = false,
  className = "",
  min,
  max,
}) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      minLength={minLength}
      required={required}
      className={`w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6 ${className}`}
      min={min}
      max={max}
    />
  );
};
