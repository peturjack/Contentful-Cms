import React from "react";
type Props = {
  name: string;
  occupation: string;
  about: string;
};
const Experts = ({ name, occupation, about }: Props) => {
  return (
    <>
      <div className="py-4 px-6 border-2 rounded h-full">
        <h3 className="font-semibold text-xl mb-2">{name}</h3>
        <span>{occupation}</span>
        <p className="mt-2">{about}</p>
      </div>
    </>
  );
};

export default Experts;
