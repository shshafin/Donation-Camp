import { Button, Input } from "@material-tailwind/react";
import { useRef, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Banner = ({ data }) => {
  return (
    <div className=" bg-white relative">
      <img
        className="opacity-5 w-full h-[60vh]"
        src={"https://i.imgur.com/BTaHWfu.png"}
      ></img>
      <div className="absolute top-48 left-56">
        <h1 className="  text-5xl  font-bold">
          I Grow By Helping People In Need
        </h1>
        <div className=" left-24 top-12 relative flex w-[60vh] gap-2 md:w-max">
          <Input
            type="search"
            color="red"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[588px]  bg-white ",
            }}
          />
          <Link to={`/Donation`}>
            <Button
              size="sm"
              className="!absolute right-1 top-1 rounded  bg-[#FF444A]"
            >
              Search
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
