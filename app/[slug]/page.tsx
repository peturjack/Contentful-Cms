import React from "react";
import client from "../lib/contentful";
import { FieldsType } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const entries = await client.getEntries({
    content_type: "testimonialSpaCards",
    "fields.slug": slug,
  });
  const data: FieldsType = entries.items[0].fields;
  const reference: FieldsType = data.referenceTreatment;

  const imageUrl = `https:${data.spaImage.fields.file.url}`;
  return (
    <div className="p-6 rounded-lg border-2 grid gap-4 mx-6 mb-4 bg-white ">
      {/* spa plan and image */}
      <section className="flex flex-col md:flex-row gap-4">
        <div className="space-y-4 md:flex-1">
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

        <Image
          priority={true}
          width={500}
          height={500}
          className="h-[300px] 2xl:h-[400px] md:flex-1 object-cover rounded-lg "
          src={imageUrl}
          alt=""
        />
      </section>
      {/* Treatment details section */}

      <section
        className="prose-base prose-p:text-gray-600 
        prose-headings:font-semibold border-b-2 pb-4"
      >
        {documentToReactComponents(data.fullDescription)}
      </section>

      {/* benefits details sections */}
      <div className="flex-col md:flex gap-4">
        <section
          className="prose max-w-full prose-p:m-0 prose-headings:font-semibold prose-headings:text-xl
        flex-1 "
        >
          {documentToReactComponents(data.benefits)}
        </section>
        {/* other Plans section */}
        <section className="flex flex-col gap-4 flex-1 prose-base">
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
        </section>
      </div>
    </div>
  );
}
