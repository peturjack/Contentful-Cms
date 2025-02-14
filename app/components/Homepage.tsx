import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { FieldsType } from "contentful";
import client from "../lib/contentful";

const Homepage = async () => {
  const entries = await client.getEntries({
    content_type: "homePage",
    limit: 1,
  });
  const datas: FieldsType = entries.items[0].fields;
  /*
    reference so that i can mby do this as well
    const bgImage = await client.getAsset("backgroundImage"); 
   */
  const imageUrl = `https:${datas.backgroundImage?.fields.file.url}`;

  return (
    <div className="min-h-screen flex flex-col px-6">
      <div
        className={`w-full h-[600px] bg-cover bg-center flex flex-col
           justify-center items-center text-white px-6
          bg-black bg-opacity-50 bg-blend-overlay rounded-lg
           `}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h1 className="text-5xl font-bold">{datas.headerTitle}</h1>
        <p className="text-xl mt-2 mb-4 text-gray-200">{datas.subheading}</p>
        <Link href={datas.ctaLink}>
          <button className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-300">
            {datas.ctaButton}
          </button>
        </Link>
      </div>

      <ProductCard />
    </div>
  );
};

export default Homepage;
