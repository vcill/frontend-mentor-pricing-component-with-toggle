import React from "react";

const Card = ({
  monthly,
  data: { type, monthlyPrice, annualPrice, storage, users, FUP },
  inverted = false,
}) => {
  return (
    <div
      className={
        inverted
          ? "py-6 min-w-max px-12 text-center rounded-lg text-white bg-gradient-to-br from-primaryStart to-primaryEnd z-10 "
          : "my-6 min-w-max px-12 text-center rounded-lg bg-white text-darkGrayishBlue shadow-[0_0_20px_0_rgba(0,0,0,0.1)] "
      }
    >
      {/* Membership type */}
      <p className="mt-12 text-center">{type}</p>

      {/* Price */}
      <p className="sm:text-6xl text-center my-8 min-w-max">
        <span className="sm:text-4xl font-bold align-middle">$ </span>
        {monthly ? monthlyPrice : annualPrice}
      </p>

      {/* Storage */}
      <p className="border-t border-t-lightGrayishBlue py-4">
        {storage} Storage
      </p>
      <p className="border-t border-t-lightGrayishBlue py-4">
        {users} Users Allowed
      </p>
      <p className="border-y border-y-lightGrayishBlue py-4">
        Send up to {FUP}
      </p>

      {/* Learn more button */}
      <button
        className={
          inverted
            ? "px-4 py-2 my-8 bg-white text-primaryEnd rounded-md w-full cursor-pointer border border-white hover:border hover:border-white hover:text-white hover:bg-transparent uppercase"
            : "px-4 py-2 my-8 bg-gradient-to-r from-primaryStart to-primaryEnd text-white rounded-md w-full cursor-pointer border border-white hover:border hover:border-primaryEnd hover:text-primaryEnd hover:from-white hover:to-white uppercase"
        }
      >
        Learn More
      </button>
    </div>
  );
};

export default Card;
