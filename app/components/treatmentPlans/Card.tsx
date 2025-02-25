import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FieldsType } from "contentful";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardImage from "./CardImage";

type Props = {
  data: FieldsType;
  image: string;
  reference: FieldsType;
};

const Card = ({ data, image, reference }: Props) => {
  return (
    <div
      className="px-6 rounded-lg 2xl:max-w-screen-2xl md:max-w-screen-xl
     mx-auto grid gap-4 mb-4 bg-white "
    >
      {/* spa plan and image */}
      <section className="flex flex-col-reverse gap-4">
        <div className="space-y-4">
          <h1 className="text-4xl">{data.treatmentLevels}</h1>
          <div className="space-x-2">
            <span className="py-1 px-3 bg-gray-100 rounded-full">
              {`$${data.price}`}
            </span>
            <span className="py-1 px-3 bg-gray-100 rounded-full">
              {data.duration}
            </span>
          </div>
          <p className="text-gray-600 ">{data.spaDescription}</p>
        </div>

        <CardImage src={image} />
      </section>
      {/* Treatment details section */}

      <section
        className="prose-base prose-p:text-gray-600 
        prose-headings:font-semibold border-b-2 pb-4"
      >
        {documentToReactComponents(data.fullDescription)}
      </section>

      {/* benefits details sections */}
      <div className="flex-col flex md:flex-row gap-4">
        <section className="w-1/2">
          <div className="prose prose-p:m-0 prose-headings:font-semibold prose-headings:text-xl">
            {documentToReactComponents(data.benefits)}
          </div>
        </section>
        {/* other Plans section */}
        <section className="flex flex-col gap-4 prose-base">
          <h3 className="font-semibold">Other plans</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href={`/${reference[0].fields.slug}`}
              className="py-2 px-4 border-2 rounded-lg hover:bg-gray-100 duration-300"
            >
              {`${reference[0].fields.treatmentLevels} Plan`}
            </Link>
            <Link
              href={`/${reference[1].fields.slug}`}
              className="py-2 px-4 border-2 rounded-lg hover:bg-gray-100 duration-300"
            >
              {`${reference[1].fields.treatmentLevels} Plan`}
            </Link>
          </div>

          <Link
            className="text-center bg-gradient-to-r from-[#50A7BA] to-[#6793AE]
             text-white py-2 px-4 rounded-lg transition duration-300"
            href={data.ctaButtonUrl}
          >
            {data.ctaButtonText}
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Card;
