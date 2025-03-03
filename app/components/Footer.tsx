import React from "react";
import Link from "next/link";
import client from "../lib/contentful";
import { FieldsType } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const Footer = async () => {
  const entries = await client.getEntries({
    content_type: "footer",
  });
  const data: FieldsType = entries.items[0].fields;

  return (
    <footer className="bg-gray-100 text-black py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo or Brand Name */}
          <div>
            <h1 className="text-2xl font-bold text-gray-600">{data.title}</h1>
            <p className="text-gray-600">{data.subtitle}</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-bold mb-2 text-gray-600">
              Quick Links
            </h2>
            <div className="space-y-2">
              {data.quickLinks.map((link: FieldsType) => {
                return (
                  <div key={link.sys.id}>
                    <Link
                      className="hover:text-[#50A7BA] text-gray-600  transition duration-300 mb-2 "
                      href={link.fields.url}
                    >
                      {link.fields.textLabel}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Information */}
          <div
            className="prose prose-headings:m-0 prose-headings:text-lg
           prose-headings:text-gray-600 prose-p:text-gray-600 space-y-2"
          >
            {documentToReactComponents(data.contactInfo)}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex md:justify-center mt-6 gap-x-4">
          {data.socialMedia.map((item: FieldsType) => {
            return (
              <div key={item.sys.id}>
                <Link href={item.fields.url}>
                  <div
                    className="bg-gray-400 hover:bg-gray-500 duration-300
                     p-2 rounded-full flex justify-center items-center
                  "
                  >
                    <Image
                      width={24}
                      height={24}
                      alt="Social media links"
                      src={item.fields.icons.fields.file.url}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Copyright Section */}
        <div className="md:text-center mt-6">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} {data.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
