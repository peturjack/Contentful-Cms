import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { FieldsType } from "contentful";
import client from "../lib/contentful";
import Image from "next/image";

const Homepage = async () => {
  const entries = await client.getEntries({
    content_type: "homePage",
    limit: 1,
  });
  const datas = entries.items;
  /*
    reference so that i can mby do this as well
    const bgImage = await client.getAsset("backgroundImage"); 
   */

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col px-6">
      {datas.map((data: FieldsType) => {
        const imageUrl = `https:${data.fields.backgroundImage.fields.file.url}`;
        return (
          <div key={data.sys.id} className="relative w-full">
            {/* Background Image */}
            <Image
              priority={true}
              height={600}
              width={1000}
              src={imageUrl}
              alt="Background"
              className="w-full h-[600] object-cover rounded-md"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 flex rounded flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 px-6">
              <h1 className="text-5xl font-bold">{data.fields.headerTitle}</h1>
              <p className="text-xl mt-2 mb-4 text-gray-200">
                {data.fields.subheading}
              </p>
              <Link href={data.fields.ctaLink}>
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                  {data.fields.ctaButton}
                </button>
              </Link>
            </div>
          </div>
        );
      })}
      <ProductCard />
    </div>
  );
};

export default Homepage;
