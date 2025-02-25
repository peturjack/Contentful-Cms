import React from "react";
type Props = {
  title: string;
  subheading: string;
  imageUrl: string;
};
const Header = ({ title, subheading, imageUrl }: Props) => {
  return (
    <div
      className={`w-full h-[300px] md:h-[600px] bg-cover bg-center flex flex-col
           justify-center items-center text-white px-6
          bg-black bg-opacity-50 bg-blend-overlay rounded-lg
           `}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h1 className="text-3xl text-center md:text-5xl font-bold">{title}</h1>
      <p className="text-center text-lg md:text-xl mt-2 mb-4 text-gray-200">
        {subheading}
      </p>
    </div>
  );
};

export default Header;
