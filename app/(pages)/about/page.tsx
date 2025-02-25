import Experts from "@/app/components/about/Experts";
import Story from "@/app/components/about/Story";
import Header from "@/app/components/Header";
import client from "@/app/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FieldsType } from "contentful";
import React from "react";

const AboutPage = async () => {
  const entries = await client.getEntries({
    content_type: "about",
  });
  const data: FieldsType = entries.items[0].fields;

  const headerImg = `https://${data.firstImage.fields.file.url}`;
  const storyImg = `https:${data.secondImage.fields.file.url}`;
  return (
    <div className="mb-8">
      <Header
        title={data.title}
        subheading={data.subheading}
        imageUrl={headerImg}
      />

      <Story about={documentToReactComponents(data.aboutUs)} image={storyImg} />
      <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
        Meet Our Experts
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.experts.map((expert: FieldsType) => {
          return (
            <div key={expert.sys.id}>
              {/*  <h2 className="text-3xl font-bold text-center mb-12">
                {expert.fields.sectionTitle}
              </h2> */}
              <Experts
                name={expert.fields.name}
                occupation={expert.fields.occupation}
                about={expert.fields.about}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default AboutPage;
