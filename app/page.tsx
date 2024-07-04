"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import Nav from "@/components/nav";
import { useProductContext } from "@/context/ProductContext";

const page = () => {
  const { data } = useProductContext();
  const jaja = "        "

  return (
    <div className="font-nunito ">
      <Nav />
      <p className="pt-8 text-lg font-semibold pl-10">Department List</p>
      <div className="bg-[#f6f6f6] px-6 pb-20">
        <div className="grid grid-cols-12 mt-5 font-semibold gap-x-3 bg-[#F0F4FE] rounded px-5 py-3">
          {/* serial number */}
          <div className="flex items-center">
            <input type="checkbox" name="serial-number" className="mr-1 flex" />
            S/N
          </div>
          {/* image */}
          <div>Image</div>
          {/* SKU */}
          <div>SKU</div>
          {/* name */}
          <div>Name</div>
          {/* Title */}
          <div className="col-span-2">Title</div>
          {/* description */}
          <div className="col-span-2">Description</div>
          {/* brand */}
          <div>Brand</div>
          {/* cost price */}
          <div>Cost Price</div>
          {/* quantity */}
          <div>Quantity</div>
          {/* size */}
          <div>SIze</div>
        </div>
        {data &&
          data.slice(0, 9).map((item: any, index: any) => (
            <div
              key={index}
              className="grid grid-cols-12 mt-5 font-semibold gap-x-3 bg-[#F0F4FE] rounded px-5 py-3 items-start text-base"
            >
              {/* serial number */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="serial-number"
                  id={`serial-number-${index}`}
                  className="mr-1 flex"
                />
                {index + 1}
              </div>
              {/* image */}
              <div>
                <img src={item?.Image_1} alt="" className="h-14" />
              </div>
              {/* SKU */}
              <div>{item?.SKU}</div>
              {/* name */}
              <div>{item?.Name}</div>
              {/* Title */}
              <div className="col-span-2">{item?.Title}</div>
              {/* description */}
              <div className="col-span-2">{item?.Description}</div>
              {/* brand */}
              <div>{item?.Brand}</div>
              {/* cost price */}
              <div>{item["Cost Price"]}</div>
              {/* quantity */}
              <div>{item.Quantity}</div>
              {/* size */}
              <div>{item.size}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default page;
