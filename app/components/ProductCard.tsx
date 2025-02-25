import React, { Suspense } from "react";
import client from "../lib/contentful";
import { FieldsType } from "contentful";
import Link from "next/link";
import ProductCardSkeleton from "./skeletons/ProductCardSkeleton";
import Image from "next/image";

const ProductCard = async () => {
  const entries = await client.getEntries({
    content_type: "testimonialSpaCards",
  });
  const datas = entries.items;

  return (
    <div className="flex flex-col sm:flex sm:flex-row gap-4 py-4">
      {datas.map((data: FieldsType) => {
        const imageUrl = `https:${data.fields.spaImage.fields.file.url}`;
        return (
          <Suspense fallback={<ProductCardSkeleton />} key={data.sys.id}>
            <Link
              href={`/${data.fields.slug}`}
              className="relative cursor-pointer h-[150px] md:h-[300px] sm:flex-1 md:hover:flex-[1.5]
               transition-all duration-300 ease-in-out"
            >
              <Image
                priority={true}
                height={1000}
                width={1000}
                className="h-full w-full object-cover rounded-lg"
                src={imageUrl}
                alt=""
              />
              <div className="absolute rounded bg-black bg-opacity-60 inset-0 text-white flex flex-col justify-center p-4">
                <div className="max-w-sm mx-auto">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {data.fields.treatmentLevels}
                  </h3>
                  <p className="text-gray-200 text-base line-clamp-3 md:line-clamp-none md:text-lg">
                    {data.fields.spaDescription}
                  </p>
                </div>
              </div>
            </Link>
          </Suspense>
        );
      })}
    </div>
  );
};

export default ProductCard;
